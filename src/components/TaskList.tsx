import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { CurrentTask } from "./CurrentTask"
import { TaskCard } from "./TaskCard"

let sum_seconds_to_date = (d: Date, s: number) =>
  new Date(d.getTime() + s * 1000)

const genesis = new Date(0 * 1000)

export const TaskList = () => {
  let isPlaying = useTimerStore((state) => state.status === "TIMER_ACTIVE")
  let tasks = useTimerStore((state) => state.tasks)
  let start_time = useTimerStore((state) => state.getState().start_tick)

  let cum = start_time && isPlaying ? [start_time] : [genesis]
  let cumtimes = tasks.map((task) => {
    let cStart = cum.slice().pop()
    let cEnd = sum_seconds_to_date(cStart, task.remaining_seconds)
    cum.push(cEnd)
    return { ...task, cStart, cEnd }
  })

  return (
    <>
      <>
        <div>
          <CurrentTask
            task={cumtimes[0]}
            times={[cumtimes[0].cStart, cumtimes[1].cEnd]}
          ></CurrentTask>
          <br />
        </div>
      </>
      {...cumtimes.slice(1).map((cTask) => {
        return (
          <div>
            <TaskCard
              task={cTask}
              times={[cTask.cStart, cTask.cEnd]}
            ></TaskCard>
            <br />
          </div>
        )
      })}
    </>
  )
}
