import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { ActiveCircle } from "./Timer/ActiveCircle"
import { BGCircle } from "./Timer/BGCircle"
import { Pause } from "./Timer/Pause"
import { seconds_to_mmss } from "./TasksLists/seconds_to_mmss"
import { TimerText } from "./Timer/TimerText"
import { Triangle } from "./Timer/Triangle"
import { ClassicTimerButtons } from "./ClassicTimerButtons"
import { Playback } from "./Timer/Playback"

// a is to b as x is to {y} (solves for y)
const solve_for_y = (a: number, b: number, x: number) => {
  return (x * b) / a
}

export const MAX = 1600

export const Timer = () => {
  let { length, remaining_seconds } = useTaskStor((state) => state)
  let fLen = MAX - solve_for_y(length, remaining_seconds, MAX)
  let cLen = seconds_to_mmss(remaining_seconds)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="650"
      className="timerCircle"
      transform="scale(0.8)">
      <BGCircle />
      <ActiveCircle fLen={fLen} max={MAX} />
      <Playback/>
      <TimerText rem={cLen} />
      <ClassicTimerButtons />
    </svg>
  )
}
