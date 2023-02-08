import { Pause } from "../components/Timer/Pause"
import { actions } from "./actions"
import { playClearSound, playTaskDoneSound } from "./useAudio"

const layouts = ["CLASSIC", "MODERN"] as const

export type Layout = typeof layouts[number]

const view_types = ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"] as const

export type Views = typeof view_types[number]

export interface MetaStore {
  dispatch: (type: string, payload?: Layout) => void
  muted: boolean
  layout: Layout
  currentView: Views
}

export const Meta_reducer = (
  state: MetaStore,
  type: string,
  payload?: Layout
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
      if (!layouts.includes(payload)) return state
      return {
        layout: payload,
      }
    }
    default:
      return state
  }
}
