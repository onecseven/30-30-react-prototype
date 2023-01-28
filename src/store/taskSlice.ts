import moment from "moment"
import { actions } from "./actions"


const add_remove_seconds = (seconds: number, add: boolean) => {
  //thresholds: 2 hours, 1 hour, 10 minutes
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  else if (seconds <= 60 && !add) return seconds
  if (add) return seconds + (min * 60)
  else return seconds - (min * 60)
}

export const task_reducer = (
  state: TaskStore,
  type: string,
  payload: TaskStore
): Partial<TaskStore> => {
  // console.log(type, state)
  switch (type) {
    case actions.task.addTime: {
      let potential = add_remove_seconds(state.remaining_seconds, true)
      if (potential > state.length) {
        potential = state.length
      }
      return {
        ...state,
        remaining_seconds: potential,
      }
    }
    case actions.task.takeTime: {
      return {
        ...state,
        remaining_seconds: add_remove_seconds(state.remaining_seconds, false),
      }
    }
    case actions.task.setTask: {
      return {
        ...state,
        ...payload,
      }
    }
    case actions.task.pause: {
      return {
        ...state,
        computed: null,
        status: "OVER",
      }
    }
    case actions.task.startTick: {
      let start = moment([])
      return {
        status: "TICKING",
        start_tick: start,
        computed: [
          start,
          start.clone().add(state.remaining_seconds, "seconds"),
        ],
      }
    }
    case actions.task.tick: {
      if (state.remaining_seconds - 2 <= 0) {
        return {
          status: "OVER",
          remaining_seconds: state.remaining_seconds - 1,
        }
      } else {
        return {
          status: "TICKING",
          remaining_seconds: state.remaining_seconds - 1,
        }
      }
    }
    default:
      return state
  }
}

export interface TaskStore {
  status: "TICKING" | "OVER"
  computed: [moment.Moment, moment.Moment] | null
  color: string
  id: string
  name: string
  length: number
  remaining_seconds: number
  start_tick: moment.Moment | null
  dispatch: (type: string, data: Partial<TaskStore> | null) => void
}
