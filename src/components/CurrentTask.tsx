import React from "react"
import { useTaskStor } from "../store/store"
import { TaskStore } from "../store/taskSlice"
import { TaskCard } from "./TaskCard"

interface taskCardProps {
  task: Partial<TaskStore>
  times: Date[] | null
}
export const CurrentTask = ({ task, times }: taskCardProps) => {
  if (!task || !times) return <></>
  let { remaining_seconds } = useTaskStor((state) => state)
  return <TaskCard task={{ ...task, remaining_seconds }} times={times} />
}
