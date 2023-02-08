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
  dispatch: (type: string, payload?: Layout | Views | string) => void
  muted: boolean
  layout: Layout
  currentView: Views
  editingTaskID: (null | string)
}

export const Meta_reducer = (
  state: MetaStore,
  type: string,
  payload?: Layout | Views | string
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
    case actions.meta.setEditTask: {
      if (payload !== null && typeof payload !== "string") return state
      else if (payload === null) return {editingTaskID: null}
      return {
        currentView: "TASK_EDIT",
        editingTaskID: payload,
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
