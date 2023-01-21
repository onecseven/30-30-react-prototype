import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { ActiveCircle } from "./Timer/ActiveCircle"
import { BGCircle } from "./Timer/BGCircle"
import { Pause } from "./Timer/Pause"
import { seconds_to_mmss } from "./TasksLists/seconds_to_mmss"
import { TimerText } from "./Timer/TimerText"
import { Triangle } from "./Timer/Triangle"
import { ClassicTimerButtons } from "./ClassicTimerButtons"

// a is to b as x is to {y} (solves for y)
const solve_for_y = (a: number, b: number, x: number) => {
  return (x * b) / a
}

export const MAX = 1600

export const Timer = () => {
  let { length, remaining_seconds } = useTaskStor((state) => state)
  let fLen = MAX - solve_for_y(length, remaining_seconds, MAX)
  let { dispatch, status } = useTimerStore((state) => state)
  let play = () => dispatch("start", null)
  let stop = () => dispatch("stop", null)
  let send_to_bottom = () => dispatch("sendBottom", null)
  let cLen = seconds_to_mmss(remaining_seconds)
  let isPlaying = status === "TIMER_ACTIVE"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="650"
      className="timerCircle"
    >
      <BGCircle />
      <ActiveCircle fLen={fLen} max={MAX} />
      {/* 
      <BottomBtn />
      <BottomLeftBtn />
      <BottomRightBtn /> */}
      {/* <TopLeftBtn />
      <TopRightBtn /> */}
      {isPlaying ? <Pause cb={stop} /> : <Triangle cb={play} />}

      <TimerText rem={cLen} />
      <ClassicTimerButtons />
    </svg>
  )
}
