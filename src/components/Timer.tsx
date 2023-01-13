import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { seconds_to_mmss } from "./TasksLists/seconds_to_mmss"

// a is to b as x is to {y} (solves for y)
const solve_for_y = (a: number, b: number, x: number) => {
  return (x * b) / a
}

export const Triangle = ({ cb }) => (
  <g onClick={cb}>
    <path
      fill="#e10915"
      // d="M270.707 175.778v128.567l128.328-64.403z"
      d="M250.707 160.778v160.567l160.328-80.403z"
    ></path>
  </g>
)

export const Pause = ({ cb }) => (
  <g onClick={cb}>
    <path
      fill="#e10915"
      d="M245 160h60v160H245zm140 "
    ></path>
        <path
      fill="#e10915"
      d="M345 160h60v160H345zm140 "
    ></path>
  </g>
)

const TimerText = ({ rem = "00:00" }) => (
  <text letterSpacing="-10" x="206" y="455" class="timerText" fill="#e10915">
    {rem}
  </text>
)
const BGCircle = () => (
  <circle
    fill="none"
    stroke="#ef5e66"
    className="circle"
    r="250"
    cx="325"
    cy="325"
    strokeWidth="90"
    onClick={() => console.log("here")}
  ></circle>
)

const ActiveCircle = ({ fLen }) => (
  <circle
    fill="none"
    stroke="#e10915"
    transform="rotate(-90 325 325)"
    /* incrementing left argument will continuously fill the circle */
    strokeDasharray={`${fLen}, ${MAX}`}
    // strokeLinecap="round"
    className="innerCircle"
    r="250"
    cx="325"
    cy="325"
    strokeWidth="90"
  ></circle>
)

const MAX = 1600

export const Timer = () => {
  let { length, remaining_seconds } = useTaskStor((state) => state)
  let fLen = MAX - solve_for_y(length, remaining_seconds, MAX)
  let { dispatch, status } = useTimerStore((state) => state)
  let play = () => dispatch("start", null)
  let stop = () => dispatch("stop", null)
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
      <ActiveCircle fLen={fLen} />

      {isPlaying ? <Pause cb={stop} /> : <Triangle cb={play} />}
      <TimerText rem={cLen} />

    </svg>
  )
}
