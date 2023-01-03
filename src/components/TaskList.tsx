import React from "react"
import { useTimerStore } from "../store/store"
import { TaskCard } from "./TaskCard"

export const TaskList = () => {
  let tasks = useTimerStore((state) => state.tasks)
  return (
    <>
      {...tasks.map((task) => (
        <div>
          <TaskCard task={task}></TaskCard>
          <br/>
        </div>
      ))}
    </>
  )
}
