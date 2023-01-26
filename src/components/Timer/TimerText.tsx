import React from "react"

export const TimerText = ({ rem = "00:00" }) => {
  return (
  <text
    letterSpacing="-10"
    x="206"
    y="455"
    className="timerText dark-fill fillT"
  >
    {rem}
  </text>
)}
