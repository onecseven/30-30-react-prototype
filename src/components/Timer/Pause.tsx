import React from "react";
import { useColor } from "../../store/useColor";


export const Pause = ({ cb }) =>{
  let {dark} = useColor()
  return (
  <g onClick={cb}>
    <path
      fill={dark}
      d="M245 160h60v160H245zm140 "
    ></path>
    <path
      fill={dark}
      d="M345 160h60v160H345zm140 "
    ></path>
  </g>
)};
