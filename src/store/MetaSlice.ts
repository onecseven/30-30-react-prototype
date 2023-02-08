import { Pause } from "../components/Timer/Pause"
import { actions } from "./actions"
import { playClearSound, playTaskDoneSound } from "./useAudio"

const layouts = ["CLASSIC", "MODERN"] as const

export type Layout = typeof layouts[number]

const isLayout = (str: any | Layout): str is Layout =>
  str === "CLASSIC" || str === "MODERN"

const view_types = ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"] as const

const isView = (str: any | Views): str is Views =>
  ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"].includes(str)

export type Views = typeof view_types[number]

export interface MetaStore {
  dispatch: (type: string, payload?: Layout | Views | number) => void
  muted: boolean
  layout: Layout
  currentView: Views
  editingTaskAtIndex: number | null
}

export const Meta_reducer = (
  state: MetaStore,
  type: string,
  payload?: Layout | Views | number
): Partial<MetaStore> => {
  switch (type) {
    case actions.meta.playTaskDone: {
      if (!state.muted) playTaskDoneSound()
      return state
    }
    case actions.meta.playClear: {
      if (!state.muted) playClearSound()
      return state
    }
    case actions.meta.toggleMute: {
      return {
        muted: !state.muted,
      }
    }
    case actions.meta.setLayout: {
      if (!isLayout(payload)) return state
      return {
        layout: payload,
      }
    }
    case actions.meta.editTask: {
      if (payload !== null && typeof payload !== "number") return state
      else if (payload === null) return {editingTaskAtIndex: null}
      return {
        editingTaskAtIndex: payload as number,
      }
    }
    case actions.meta.setView: {
      if (!isView(payload)) return state
      else if (payload === state.currentView) return {currentView: "TIMER"}
      return {
        currentView: payload,
      }
    }
    default:
      return state
  }
}
