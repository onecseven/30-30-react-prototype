import React from "react"
import { Timer } from "./components/Timer"


import { useTimerStore } from "./store/store"
import { TaskList } from "./components/TasksLists/TaskList"
import { TotalLength } from "./components/Timer/TotalLength"
export const App = () => {
  return (
    <>
      <div className="App">
  
        <TotalLength/>
        <Timer />
        <TaskList/>
      </div>
    </>
  )
}

export default App
