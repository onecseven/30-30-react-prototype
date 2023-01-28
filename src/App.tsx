import React, { useState, useCallback, useEffect} from "react"
import { Picker } from "./components/Picker/Picker"

import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"
import { useColor } from "./store/useColor"
import { useTitle } from "./store/useTitle"

export const App = () => {
  useColor()
  useTitle()
  const [showPicker, setPicker] = useState(false)
  const swap = useCallback(() => {
    setPicker(!showPicker)
  }, [showPicker])

  return (
      <div className="App" >
        <TopBar swap={swap} />
        {showPicker ? <Picker swap={swap} /> : <TimerView />}
      </div>
  )
}

export default App
