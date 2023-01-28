import React from "react"
import { useTimerStore } from "../../store/store"
import { CurrentTask } from "./CurrentTask"
import { TaskCard } from "./TaskCard"

export const TaskList = () => {
  let tasks = useTimerStore((state) => state.tasks)
  let isLooping = useTimerStore((state) => state.looping)
  let after_break = false
  tasks = tasks.map((task) => {
    if (task.name === "BREAK" && !isLooping) after_break = true
    if (!after_break) return task
    else {
      return { ...task, computed: null }
    }
  })
  return (
    <div className="taskList">
      <>
      <CurrentTask />
       <br/>
        {...tasks.slice(1).map((cTask) => {
          return (
            <>
              <TaskCard task={cTask}></TaskCard>
              <br />
            </>
          )
        })}
      </>
    </div>
  )
}
