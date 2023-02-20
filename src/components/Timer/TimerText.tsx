import React from "react"
import { useTaskStor } from "../../store/store"
import { formatSeconds, seconds_to_mmss } from "../Shared/seconds_to_mmss"

export const TimerText = ({ rem = "00:00" }) => {
  let { remaining_seconds } = useTaskStor((state) => state)
  let isHour = remaining_seconds >= 3600
  let cLen = formatSeconds(remaining_seconds)

  return (
    <>
      <text
        letterSpacing="-10"
        x="210"
        y={isHour ? "425" : "455"}
        className={`${isHour ? "hourTimerText" : "minuteTimerText"} dark-fill fillT fadeIn"`}
      >
        <tspan x="210" y={isHour ? "425" : "455"} strokeWidth="0.265">
          {cLen || rem}
        </tspan>
      </text>
    </>
  )
}
