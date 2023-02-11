import React, { useEffect } from "react"
import { ModalView } from "./components/Modal/ModalView"
import { Picker } from "./components/Picker/Picker"
import { Settings } from "./components/Settings/Settings"

import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"
import { useSettingsStore } from "./store/store"
import { useColor } from "./store/useColor"
import { useTitle } from "./store/useTitle"

const view_types = ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"] as const

export type Views = typeof view_types[number]

export const App = () => {
  useColor()
  useTitle()
  const [dispatch, currentView] = useSettingsStore(state => [state.dispatch, state.currentView])

  const setView = (view: Views) => () => {
    dispatch("setView", view)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentView])

  return (
    <div className="App" id="App">
      {currentView === "TASK_EDIT" && <ModalView swap={setView("TIMER")} />}
      {currentView !== "TASK_EDIT" && <TopBar swap={setView} />}
      {currentView === "TIMER" && <TimerView />}
      {currentView === "PICKER" && <Picker swap={setView("TIMER")} />}
      {currentView === "SETTINGS" && <Settings swap={setView("SETTINGS")} />}
    </div>
  )
}

export default App
