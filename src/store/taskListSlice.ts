import { TaskStore } from "./taskSlice"
import { actions } from "./actions"
import { SettingsStore } from "./vanillastore"

function move<T>(array: T[], index: number, delta: number) {
  //ref: https://gist.github.com/albertein/4496103

  var newIndex = index + delta
  if (newIndex < 0 || newIndex == array.length) return //Already at the top or bottom.
  var indexes = [index, newIndex].sort((a, b) => a - b) //Sort the indixes (fixed)
  array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]) //Replace from lowest index, two elements, reverting the order
  return array
}

var moveUp = function <T>(array: T[], index: number) {
  return move(array, index, -1)
}

var moveDown = function <T>(array: T[], index: number) {
  return move(array, index, 1)
}

export interface TaskChange {
  id: string
  changes: Partial<TaskStore>
}

const isTaskChange = (obj: any | TaskChange): obj is TaskChange =>
  obj.hasOwnProperty("id") && obj.hasOwnProperty("changes")

export interface TaskListStore {
  id: string
  status: "IDLE" | "TIMER_ACTIVE"
  name: string
  tasks: TaskStore[]
  looping: boolean
  timer: ReturnType<typeof setTimeout> | null
  getState(): TaskStore
  dispatch: (type: string, payload: TaskListStore | string | TaskChange) => void
}

let compute_times = (state: TaskListStore): TaskListStore["tasks"] => {
  let [_, start] = state.getState().computed
  let ends = [{ ...state.getState() }]

  state.tasks.slice(1).forEach((task) => {
    let [cStart, cEnd] = [
      start.clone(),
      start.clone().add(task.remaining_seconds, "seconds"),
    ]
    ends.push({ ...task, computed: [cStart, cEnd] })
    start = cEnd.clone()
  })
  return ends
}

let set_timer = (state: TaskListStore) =>
  setInterval(() => {
    if (state.getState().status === "TICKING")
      state.getState().dispatch(actions.task.tick, null)
    else if (state.getState().status === "OVER")
      state.dispatch(actions.taskList.sendBottom, null)
  }, 1000)

const start_timer = (state): Partial<TaskListStore> => {
  state.getState().dispatch(actions.task.startTick, null)
  return {
    timer: set_timer(state),
    status: "TIMER_ACTIVE",
    tasks: compute_times(state),
  }
}

export const tasklist_reducer = (
  state: TaskListStore,
  type: string,
  payload: TaskListStore | "preserve" | TaskChange
): Partial<TaskListStore> => {
  // console.log(type)
  switch (type) {
    case actions.taskList.start: {
      if (state.status === "TIMER_ACTIVE") return state
      return start_timer(state)
    }
    case actions.taskList.stop: {
      if (state.timer) clearInterval(state.timer)
      state.getState().dispatch(actions.task.pause, null)
      return {
        timer: null,
        status: "IDLE",
        tasks: state.tasks.map((task) => ({ ...task, computed: null })),
      }
    }
    case actions.taskList.toggleLoop: {
      return { looping: !state.looping }
    }
    case actions.taskList.sendBottom: {
      /* Clear timer, get inner dispatch, make new tasks array*/
      if (state.timer) clearInterval(state.timer)
      let taskDispatch = state.getState().dispatch
      let settingsDispatch = SettingsStore.getState().dispatch
      let tasks = state.tasks.slice(1)
      /* Depending on how the action was called we need to move the finished task differenly */
      if (payload === "preserve") tasks.push({ ...state.getState() })
      else
        tasks.push({
          ...state.getState(),
          remaining_seconds: state.getState().length,
        })

      /* change the current task to the new front of the queue */
      taskDispatch(actions.task.setTask, { ...tasks[0] })

      /* if the current task is "BREAK", we have to push that to the back and set a new current task
      and if the timer isn't looping, then we should transition to "IDLE"*/
      if (tasks[0].name === "_BREAK") {
        tasks.push(tasks.shift())
        taskDispatch(actions.task.setTask, { ...tasks[0] })

        if (!state.looping) {
          taskDispatch(actions.task.pause, null)
          settingsDispatch(actions.meta.playClear)
          return {
            tasks: tasks.map((task) => ({ ...task, computed: null })),
            status: "IDLE",
          }
        }
      }

      if (state.status === "TIMER_ACTIVE") {
        settingsDispatch(actions.meta.playTaskDone)
        return { ...start_timer({ ...state, tasks }) }
      }

      /* handles calls when the timer is off */
      return {
        timer: null,
        tasks: tasks.map((task) => ({ ...task, computed: null })),
      }
    }
    case actions.taskList.setTaskList: {
      if (state.timer) clearInterval(state.timer)
      if (!payload || typeof payload === "string" || isTaskChange(payload))
        return state
      state.getState().dispatch("setTask", payload.tasks[0])
      return { ...state, status: "IDLE", ...payload }
    }
    case actions.taskList.editTask: {
      if (!isTaskChange(payload)) return state
      let index = state.tasks.findIndex((task) => task.id === payload.id)
      let task = state.tasks.slice()[index]
      let newTask = {
        ...task,
        ...payload.changes,
      }
      let newTasks = state.tasks.slice()
      newTasks[index] = newTask
      if (index === 0) state.getState().dispatch("setTask", payload.changes)
      return {
        tasks: newTasks,
      }
    }
    case actions.taskList.endTasklist: {
      if (state.timer) clearInterval(state.timer)
      return {
        status: "IDLE",
      }
    }
    case actions.taskList.delete: {
      if (state.tasks.length < 3) return state
      if (!isTaskChange(payload)) return state
      if (state.timer) clearInterval(state.timer)
      let taskDispatch = state.getState().dispatch
      let index = state.tasks.findIndex((task) => task.id === payload.id)
      let tasks = state.tasks.slice()
      tasks.splice(index, 1)
      if (index === 0) taskDispatch(actions.task.setTask, { ...tasks[0] })
      return {
        timer: null,
        tasks: tasks.map((task) => ({ ...task, computed: null })),
        status: "IDLE",
      }
    }
    case actions.taskList.add: {
      if (!isTaskChange(payload)) return state
      let break_index = state.tasks.findIndex((task) => task.name === "_BREAK")
      let newtasks = state.tasks.slice()
      newtasks.splice(break_index, 0, payload.changes as TaskStore)
      return {
        tasks: newtasks,
      }
    }
    case actions.taskList.moveDown: {
      if (!isTaskChange(payload)) return state
      let taskDispatch = state.getState().dispatch
      let index = state.tasks.findIndex((task) => task.id === payload.id)
      let newTasks = moveDown(state.tasks.slice(), index)
      if (index === 0) taskDispatch(actions.task.setTask, { ...newTasks[0] })
      return {
        tasks: newTasks,
      }
    }
    case actions.taskList.moveUp: {
      if (!isTaskChange(payload)) return state
      let taskDispatch = state.getState().dispatch
      let index = state.tasks.findIndex((task) => task.id === payload.id)
      if (index === 0) {
        state.dispatch(actions.taskList.sendBottom, "preserve")
        return {}
      } else {
        let newTasks = moveUp(state.tasks.slice(), index)
        if (index === 1) taskDispatch(actions.task.setTask, { ...newTasks[0] })
        return {
          tasks: newTasks,
        }
      }
    }
    case actions.taskList.changeName: {
      if (typeof payload !== "string") return state
      return {
        name: payload.slice(0,12),
      }
    }
    default:
      return state
  }
}
