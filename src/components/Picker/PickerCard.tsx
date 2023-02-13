import React from "react"
import { useColor } from "../../store/useColor"
import { ListIcon } from "../Shared/icons/ListIcon"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

interface PickerCardProps {
  name: string
  select: () => void
  del: () => void
}

const DeleteButton = ({ del }: Partial<PickerCardProps>) => (
  <>
    <g className="innerButton" onClick={del}>
      <rect
        strokeWidth="1"
        stroke="transparent"
        className={`light-stroke  dark-fill circle `}
        stroke-width="0.5"
        // stroke-opacity:1"
        width="18"
        height="18"
        x="110"
        y="9"
        rx="2"
      ></rect>
      <TaskCardIcon type="close" color={"stroke"} x="110" y="9" />
    </g>
  </>
)

export const PickerCard = ({ name, select, del }: PickerCardProps) => {
  useColor()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="450"
      className="svgTaskCard innerTask"
      transform="scale(0.77)"
    >
      <g onClick={select}>
        <path
          className="dark-fill fillT"
          strokeWidth="0.265"
          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
        ></path>
        <PickerLabel name={name} />
        <ListIcon x="8" y="10" />
      </g>
      <DeleteButton del={del} />
    </svg>
  )
}

const PickerLabel = ({
  name = "<unnamed tasklist>",
}: Partial<PickerCardProps>) => {
  return (
    <text
      x="28"
      y="24"
      className="light-fill fillT"
      strokeWidth="0.265"
      // fontSize="16.933"
      xmlSpace="preserve"
    >
      <tspan x="28" y="24.5" strokeWidth="0.265" fontSize="16">
        {name}
      </tspan>
    </text>
  )
}
