import React from "react"
import { useTaskStor, useTimerStore } from "../store/store"
import { ActiveCircle } from "./Timer/ActiveCircle"
import { BGCircle } from "./Timer/BGCircle"
import { Pause } from "./Timer/Pause"
import { seconds_to_mmss } from "./Shared/seconds_to_mmss"
import { TimerText } from "./Timer/TimerText"
import { Triangle } from "./Timer/Triangle"
import { ClassicTimerButtons } from "./ClassicTimerButtons"
import { Playback } from "./Timer/Playback"



export const Timer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="650"
      className="timerCircle"
      transform="scale(0.8)">
      <BGCircle />
      <ActiveCircle />
      <Playback/>
      <TimerText  />
      <ClassicTimerButtons />
    </svg>
  )
}
