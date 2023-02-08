import React, { useState, useCallback, useEffect } from "react"
import { ModalView } from "./components/Modal/ModalView"
import { Picker } from "./components/Picker/Picker"
import { Settings } from "./components/Settings/Settings"

import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"
import { useColor } from "./store/useColor"
import { useTitle } from "./store/useTitle"

const view_types = ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"] as const

export type Views = typeof view_types[number]

export const App = () => {
  useColor()
  useTitle()

  const [currentView, setCurrentView] = useState<Views>("TIMER")

  const setView = (view: Views) => () => {
    if (currentView === view) setCurrentView("TIMER")
    else setCurrentView(view)
  }

  return (
    <div className="App" id="App">
      {currentView !== "TASK_EDIT" && <TopBar swap={setView} />}
      {currentView === "TASK_EDIT" && <ModalView />}
      {currentView === "TIMER" && <TimerView />}
      {currentView === "PICKER" && <Picker swap={setView("TIMER")} />}
      {currentView === "SETTINGS" && <Settings swap={setView("SETTINGS")} />}
    </div>
  )
}

export default App
