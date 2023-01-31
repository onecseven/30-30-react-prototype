import { actions } from "./actions"

const layouts = ["CLASSIC", "MODERN"] as const

export type Layout = typeof layouts[number]



export interface MetaStore {
  dispatch: (type: string) => void
  muted: boolean
  layout: Layout
}

//IMPLEMENT
//We also need to create the store in vanillastore.ts
//and in store.ts

export const Meta_reducer = (
  state: MetaStore,
  type: string
): Partial<MetaStore> => {
  switch (type) {
    case actions.meta.playTaskDone: {
    }
    case actions.meta.playClear: {
    }
    case actions.meta.toggleMute: {
    }
    case actions.meta.setLayout: {
    }
    default:
      return state
  }
}
