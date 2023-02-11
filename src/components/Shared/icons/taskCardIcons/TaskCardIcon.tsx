import React from 'react'
import { taskIcon } from '../../../../types'
import IconList from "./IconRegistry"

interface TaskCardIconProps {
  color: string
  type: taskIcon
  className?: string
  x?: string
  y?: string
  onClick?: () => void
}

export const TaskCardIcon = ({color, type, className = "", x="8", y="5", onClick}: TaskCardIconProps) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    x={x}
    y={y}
    viewBox="0 0 24 24"
    fill="none"
    className={`light-${color} ${className}`}
    stroke={color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    onClick={onClick}
  >
    {IconList[type]()}
    </svg>
  )
}
