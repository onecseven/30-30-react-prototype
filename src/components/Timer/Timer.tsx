import React from "react"
import { ActiveCircle } from "./ActiveCircle"
import { BGCircle } from "./BGCircle"
import { TimerText } from "./TimerText"
import { ClassicTimerButtons } from "./ClassicTimerButtons"
import { Playback } from "./Playback"
import { TatiTimerButtons } from "./TatiTimerButtons"



export const Timer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="650"
      className="timerCircle">
      <BGCircle />
      <ActiveCircle />
      <Playback/>
      <TimerText  />
      {/* <ClassicTimerButtons /> */}
      <TatiTimerButtons/>
    </svg>
  )
}
