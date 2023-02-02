import React from 'react'
import IconList from "./IconRegistry"

export const TaskCardIcon = ({color, children, type}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    x="8"
    y="5"
    viewBox="0 0 24 24"
    fill="none"
    className={`light-${color}`}
    stroke={color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {IconList[type]()}
    </svg>
  )
}
