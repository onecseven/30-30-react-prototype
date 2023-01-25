import React, { useState, useCallback } from "react"
import { Picker } from "./components/Picker/Picker"
import { PickerButton } from "./components/Picker/PickerButton"
import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"

export const App = () => {
  const [showPicker, setPicker] = useState(false)
  const swap = useCallback(() => {
    setPicker(!showPicker)
  }, [showPicker])

  return (
    <>
      <div className="App">
        <TopBar swap={swap} />
        {showPicker ? <Picker swap={swap} /> : <TimerView />}
      </div>
    </>
  )
}

export default App
