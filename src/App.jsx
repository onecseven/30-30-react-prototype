import React from "react"
import { Timer } from "./components/Timer"
import { TaskList } from "./components/TasksLists/TaskList"
import { TotalLength } from "./components/Timer/TotalLength"
import { Picker } from "./components/Picker/Picker"

export const App = () => {
  return (
    <>
      <div className="App">
        <Picker/>
        <TotalLength/>
        <Timer />
        <TaskList/>
      </div>
    </>
  )
}

export default App
