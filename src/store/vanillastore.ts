import create from "zustand/vanilla"
import { TaskStore, task_reducer } from "./taskSlice"
import { TaskListStore, tasklist_reducer } from "./taskListSlice"
import { PickerStore, picker_reducer } from "./PickerSlice"
import { TaskList } from "../data"


export const TaskStor = create<TaskStore>()((set, get) => ({
  status: "OVER",
  id: "",
  color: "gray",
  name: "",
  length: -1,
  remaining_seconds: -1,
  start_tick: null,
  computed: null,
  dispatch: (type: string, data: TaskStore) =>
    set((state) => task_reducer(state, type, data)),
}))

export const TimerStore = create<TaskListStore>()((set) => ({
  status: "IDLE",
  name: "",
  tasks: [],
  looping: false,
  timer: null,
  isPlaying: false,
  ...TaskStor,
  dispatch: (type: string, data: TaskListStore) =>
    set((state) => tasklist_reducer(state, type, data)),
}))

export const PickerStor = create<PickerStore>()((set) => ({
  taskLists: [],
  dispatch: (type: "string", data: string | TaskList[]) =>
    set((state) => picker_reducer(state, type, data)),
}))
