import React from "react";
import { useColor } from "../../store/useColor";

export const ActiveCircle = ({ fLen, max }) => {
  let {dark} = useColor()
  return (
  <circle
    fill="none"
    stroke={dark}
    transform="rotate(-90 325 325)"
    /* incrementing left argument will continuously fill the circle */
    strokeDasharray={`${fLen}, ${max}`}
    // strokeLinecap="round"
    className="innerCircle"
    r="250"
    cx="325"
    cy="325"
    strokeWidth="90"
  ></circle>
)
}