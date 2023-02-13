import { createDefaultList, TaskList } from "../data"
import { actions } from "./actions"
import { TaskListStore } from "./taskListSlice"
import { TimerStore } from "./vanillastore"

export interface PickerStore {
  taskLists: TaskList[]
  dispatch: (type: string, data: TaskList["id"] | TaskList[] | null | TaskListChange) => void
}

export interface TaskListChange {
  id: string
  changes: Partial<TaskListStore>
}

const isTaskListChange = (obj: any | TaskListChange): obj is TaskListChange =>
  obj.hasOwnProperty("id") && obj.hasOwnProperty("changes")


export const picker_reducer = (
  state: PickerStore,
  type: string,
  payload: TaskList["id"] | TaskList[] | null | TaskListChange
): Partial<PickerStore> => {
  switch (type) {
    case actions.picker.select: {
      if (!payload || typeof payload !== "string") return state
      else {
        let selected: unknown = state.taskLists.find((store) => store.id === payload) 
        if (selected) TimerStore.getState().dispatch(actions.taskList.setTaskList, selected as TaskListStore)
      }
      return state
    }
    case actions.picker.set: {
      if (!payload || !Array.isArray(payload) ) return state
      return {
        taskLists: state.taskLists.concat(payload)
      }
    }
    case actions.picker.add: {
      return {
        taskLists: state.taskLists.concat(createDefaultList())
      }
    }
    case actions.picker.edit: {
      if (!isTaskListChange(payload)) return state
      let index = state.taskLists.findIndex((task) => task.id === payload.id)
      let taskList = state.taskLists[index]
      let selected = TimerStore.getState().id === payload.id
      let newTaskList = {
        ...taskList,
        ...payload.changes,
      }
      let newTasks = state.taskLists.slice()
      
      newTasks[index] = newTaskList
      if (selected) TimerStore.getState().dispatch(actions.taskList.setTaskList, newTaskList as TaskListStore)
      return {
        taskLists: newTasks,
      }
    }
    case actions.picker.delete: {
      if (!isTaskListChange(payload) || state.taskLists.length <= 1) return state
      let index = state.taskLists.findIndex((task) => task.id === payload.id)
      let newTasks = state.taskLists.slice()
      newTasks.splice(index, 1)
      let selected = TimerStore.getState().id === payload.id
      if (selected) TimerStore.getState().dispatch(actions.taskList.setTaskList, newTasks[0] as TaskListStore)
      return {
        taskLists: newTasks,
      }
    }
    default:
      return state
  }
}
