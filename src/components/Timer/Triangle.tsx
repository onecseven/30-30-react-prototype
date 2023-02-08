import React from "react";
import { useColor } from "../../store/useColor";


export const Triangle = ({ cb }) => {
  useColor()
  return (
  <g onClick={cb} className="innerTask">
    <path
      className="dark-fill fillT"
      d="M250.707 160.778v160.567l160.328-80.403z"
    ></path>
  </g>
)};
