import React from "react";
import { useColor } from "../../store/useColor";


export const Pause = ({ cb }) =>{
  useColor()
  return (
  <g onClick={cb} className="innerTask" >
    <path
      className="dark-fill fillT "
      d="M245 160h60v160H245zm140 "
    ></path>
    <path
      className="dark-fill fillT"
      d="M345 160h60v160H345zm140 "
    ></path>
  </g>
)};
