import React from "react";

export const TimerText = ({ rem = "00:00" }) => (
  <text letterSpacing="-10" x="206" y="455" class="timerText" fill="#e10915">
    {rem}
  </text>
);
