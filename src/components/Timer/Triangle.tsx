import React from "react";


export const Triangle = ({ cb }) => (
  <g onClick={cb}>
    <path
      fill="#e10915"
      // d="M270.707 175.778v128.567l128.328-64.403z"
      d="M250.707 160.778v160.567l160.328-80.403z"
    ></path>
  </g>
);
