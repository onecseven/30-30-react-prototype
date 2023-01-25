import React from "react"
import { TaskList } from "./TasksLists/TaskList"
import { Timer } from "./Timer"
import { TotalLength } from "./Timer/TotalLength"

export const TimerView = () => {
  return (
    <div className="timerView">

      <TotalLength />
      <Timer />
      <TaskList />
    </div>
  )
}
