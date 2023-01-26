import React from "react";

export const ActiveCircle = ({ fLen, max }) => {
  return (
  <circle
    fill="none"
    transform="rotate(-90 325 325)"
    /* incrementing left argument will continuously fill the circle */
    strokeDasharray={`${fLen}, ${max}`}
    // strokeLinecap="round"
    className="innerCircle dark-stroke"
    r="250"
    cx="325"
    cy="325"
    strokeWidth="90"
  ></circle>
)
}