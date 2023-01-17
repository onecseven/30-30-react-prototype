import React from "react";

export const ActiveCircle = ({ fLen, max }) => (
  <circle
    fill="none"
    stroke="#e10915"
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
);
