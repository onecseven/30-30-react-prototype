import React from "react"
import { TaskStore } from "../store/taskSlice"

interface taskCardProps {
  task: Partial<TaskStore>
}

//TODO COMPUTED TIME OF TASK BEING FINISHED

export const TaskCard = ({ task }: taskCardProps) => {
  let { name, remaining_seconds, length } = task
  return (
    <>
      <div>Name: {name}</div>
      <div>Length: {length}</div>
    </>
  )
}
