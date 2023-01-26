import React from "react"
import { useColor } from "../../store/useColor"

export const TimerText = ({ rem = "00:00" }) => {
  let {dark} = useColor()
  return (
  <text
    letterSpacing="-10"
    x="206"
    y="455"
    className="timerText"
    fill={dark}
  >
    {rem}
  </text>
)}
