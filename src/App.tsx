import React, { useState, useCallback, useEffect } from "react"
import { Picker } from "./components/Picker/Picker"

import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"
import { useColor } from "./store/useColor"
import { useTitle } from "./store/useTitle"

const view_types = ["TIMER", "PICKER", "SETTINGS"] as const

export type Views = typeof view_types[number]

export const App = () => {
  useColor()
  useTitle()

  /*
  So, we have three components that we want to show conditionally.
  The least complicated way to do it would be... let's have state
  that can be either PICKER / SETTINGS / TIMER. 
  Then we could have a f()() like, 
  */

  const [currentView, setCurrentView] = useState<Views>("TIMER")

  const setView = (view: Views) => () => {
    if (currentView === view) setCurrentView("TIMER")
    else setCurrentView(view)
  }

  /*
  const [showPicker, setPicker] = useState<boolean>(false)
  const swap = useCallback(() => {
    setPicker(!showPicker)
  }, [showPicker])
  */
  return (
    <div className="App">
      <TopBar swap={setView} />
      {currentView === "TIMER" && <TimerView />}
      {currentView === "PICKER" && <Picker swap={setView("TIMER")} />}
    </div>
  )
}

export default App
