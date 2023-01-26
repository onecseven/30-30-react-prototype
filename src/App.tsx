import React, { useState, useCallback, useEffect} from "react"
import { Picker } from "./components/Picker/Picker"

import { TimerView } from "./components/TimerView"
import { TopBar } from "./components/TopBar"
import { useColor } from "./store/useColor"

export const App = () => {
  const { light } = useColor()
  const [showPicker, setPicker] = useState(false)
  const swap = useCallback(() => {
    setPicker(!showPicker)
  }, [showPicker])
  useEffect(() => {
    document.body.style = `background-color: ${light};`
    return () => {
    }
  }, [light])
  
  return (
      <div className="App" style={{"background-color": light}}>
        <TopBar swap={swap} />
        {showPicker ? <Picker swap={swap} /> : <TimerView />}
      </div>
  )
}

export default App
