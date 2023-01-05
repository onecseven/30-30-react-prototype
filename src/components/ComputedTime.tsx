import moment from "moment"
import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { TaskStore } from "../store/taskSlice"

function date_to_hhmmss(date: Date) {
  return date.toISOString().substr(11, 8)
}
let sum_seconds_to_date = (d: Date, s: number) =>
  new Date(d.getTime() + s * 1000)


interface cProps {
  task: TaskStore
}

export const ComputedTime = ({ task }: cProps) => {
  let tasks = useTimerStore((state) =>
    state.tasks.filter((task) => task.name !== "BREAK")
  )

  const genesis = moment().startOf("day")

  let isPlaying = useTimerStore((state) => state.status === "TIMER_ACTIVE")
  let startTime = useTaskStor((state) => state.start_tick)
  if (!isPlaying) startTime = genesis
  let tLen = tasks.reduce((prev, current) => prev + current.remaining_seconds, 0)
  let times = [startTime]
  tasks = tasks.slice(0, tasks.map(t => t.id).indexOf(task.id))
  tasks = tasks.map(task  => {
    times.unshift(times[0].clone().add(task.remaining_seconds))
    return task
  })
  console.log(times.map(t => t.format("HH:mm:ss")))
  return (
    <div className="cTimes">
      {times[1].format("HH:mm:ss")} → {times[0].clone().add(task.remaining_seconds, 'second').format("HH:mm:ss")}{" "}
    </div>
  )
}
