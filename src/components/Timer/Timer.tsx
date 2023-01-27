import React from "react"
import { useTaskStor, useTimerStore } from "../../store/store"
import { ActiveCircle } from "./ActiveCircle"
import { BGCircle } from "./BGCircle"
import { Pause } from "./Pause"
import { seconds_to_mmss } from "../Shared/seconds_to_mmss"
import { TimerText } from "./TimerText"
import { Triangle } from "./Triangle"
import { ClassicTimerButtons } from "./ClassicTimerButtons"
import { Playback } from "./Playback"



export const Timer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="650"
      className="timerCircle"
      <BGCircle />
      <ActiveCircle />
      <Playback/>
      <TimerText  />
      <ClassicTimerButtons />
    </svg>
  )
}
