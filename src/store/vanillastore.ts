import create from "zustand/vanilla"
import {persist} from "zustand/middleware"
import { TaskStore, task_reducer } from "./taskSlice"
import { TaskListStore, tasklist_reducer } from "./taskListSlice"
import { PickerStore, picker_reducer, TaskListChange } from "./PickerSlice"
import { TaskList } from "../data"
import { Layout, MetaStore, Meta_reducer, Views } from "./MetaSlice"
import data from "../data"

let defaultTask = data.tasks[0]

export const TaskStor = create<TaskStore>()((set, get) => ({
  status: "OVER",
  id: "",
  icon: null,
  color: "gray",
  name: "",
  length: -1,
  remaining_seconds: -1,
  start_tick: null,
  computed: null,
  ...defaultTask,
  dispatch: (type: string, data: TaskStore) =>
    set((state) => task_reducer(state, type, data)),
}))

export const TimerStore = create<TaskListStore>()(persist((set) => ({
  id: "",
  status: "IDLE",
  name: "",
  //@ts-ignore
  tasks: [],
  looping: false,
  timer: null,
  isPlaying: false,
  ...TaskStor,
  ...data,
  dispatch: (type: string, data: TaskListStore) =>
    set((state) => tasklist_reducer(state, type, data)),
}), {
  name: "timerStore",
  partialize: (state) => {
    return {
      ...state,
      tasks: state.tasks.map(tasks => ({...tasks, computed: null})),
      status: "IDLE"
    }
  }
}))

// export const TimerStore = create<TaskListStore>()((set) => ({
//   id: "",
//   status: "IDLE",
//   name: "",
//   //@ts-ignore
//   tasks: [],
//   looping: false,
//   timer: null,
//   isPlaying: false,
//   ...TaskStor,
//   ...data,
//   dispatch: (type: string, data: TaskListStore) =>
//     set((state) => tasklist_reducer(state, type, data)),
// }))

TimerStore.persist.onFinishHydration((state) => TaskStor.getState().dispatch("setTask", state.tasks[0]))

// console.log(JSON.stringify(TimerStore.getState(), null, 2))
// console.log(JSON.stringify(TaskStor.getState(), null, 2))
// export const PickerStor = create<PickerStore>()(persist((set) => ({
//   taskLists: [data],
//   dispatch: (type: "string", data: TaskList["id"] | TaskList[] | null | TaskListChange) =>
//     set((state) => picker_reducer(state, type, data)),
// }), {
//   name: "tasklists"
// }))
export const PickerStor = create<PickerStore>()(persist((set) => ({
  taskLists: [data],
  dispatch: (type: "string", data: TaskList["id"] | TaskList[] | null | TaskListChange) =>
    set((state) => picker_reducer(state, type, data)),
}), {
  name: "tasklists"
}))

export const SettingsStore = create<MetaStore>()(persist((set) => ({
  muted: false,
  layout: "CLASSIC",
  currentView: "TIMER",
  editingTaskID: null,
  dispatch: (type: string, data?: Layout | Views | string) =>
    set((state) => Meta_reducer(state, type, data)),
}), {
  name: "settings",
  partialize: (state) =>
  Object.fromEntries(
    Object.entries(state).filter(([key]) => !['editingTaskID', "currentView"].includes(key))
  ),
}))
