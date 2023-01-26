import React from "react";
import { useColor } from "../../store/useColor";

export const BGCircle = () => {
  let {medium} = useColor()
  return (
  <circle
    fill="none"
    stroke={medium}
    className="circle"
    r="250"
    cx="325"
    cy="325"
    strokeWidth="90"
    
  ></circle>
)};
