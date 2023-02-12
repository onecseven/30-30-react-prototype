import React from "react"
import { Layout } from "../../store/MetaSlice"
import { Color, taskIcon } from "../../types"
import { ReplySolidIcon } from "../Shared/icons/ReplySolidIcon"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

type SVGCardProps = {
  name: string
  length: string
  cStart: string
  cEnd: string
  color: Color | "fill"
  layout: Layout
  fill?: string
  icon: taskIcon | null
  edit: () => void
  move: [() => void, () => void]
}

export const SVGCard = ({
  name,
  length,
  cEnd,
  cStart,
  color,
  layout,
  icon,
  edit,
  move
}: SVGCardProps) => {
  let computedColor = layout === "MODERN" ? "fill" : color
  let [moveUp, moveDown] = move
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="490"
      className="svgTaskCard fadeIn"
    >
        <path
          className={`dark-${computedColor} fillT innerTask`}
          strokeWidth="0.265"
          onClick={edit}

          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
        ></path>
        <TaskCardIcon
          type={icon}
          color={layout === "MODERN" ? "stroke" : color + "-stroke"}
          onClick={edit}
        />
        <CardName name={name} color={computedColor} onClick={edit}/>
        <CardLength length={length} color={computedColor} onClick={edit} />
        <CompStart cStart={cStart + " 🡒 " + cEnd} color={computedColor} onClick={edit} />
        <UpArrow color={color}  moveUp={moveUp}/>
        <DownArrow color={color} moveDown={moveDown}/>
        {/* <CardArrow color={computedColor} />
        <CompEnd cEnd={cEnd} color={computedColor} /> */}
    </svg>
  )
}

const CardName = ({ name = "Name", color, onClick}) => {
  return (
    <text
      x="30"
      y="24.881"
      className={`light-${color} fillT noselect`}
      strokeWidth="0.265"
      fontSize="16.933"
      xmlSpace="preserve"
      onClick={onClick}
    >
      <tspan x="30" y="20.881" strokeWidth="0.265" fontSize="16.933">
        {name}
      </tspan>
    </text>
  )
}

const CardLength = ({ length = "00:00", color, onClick }) => (
  <text
    x="10"
    y="31.106"
    className={`light-${color} fillT noselect`}
    strokeWidth="0.199"
    fontSize="6.375"
    xmlSpace="preserve"
    onClick={onClick}
  >
    <tspan x="10" y="31.106" strokeWidth="0.199" fontSize="6.375">
      {length}
    </tspan>
  </text>
)
const CompStart = ({ cStart = "xx:xx:xx", color, onClick }) => (
  <text
    x="59.500"
    y="31.106"
    className={`light-${color} fillT noselect`}
    strokeWidth="0.265"
    onClick={onClick}
    fontSize="7"
  >
    <tspan x="55.500" y="31.106" strokeWidth="0.265">
      {cStart}
    </tspan>
  </text>
)

const CompEnd = ({ cEnd = "xx:xx:xx", color }) => (
  <text
    x="94.202"
    y="31.165"
    className={`light-${color} fillT`}
    strokeWidth="0.265"
    fontSize="7"
  >
    <tspan x="94.202" y="31.165" strokeWidth="0.265">
      {cEnd}
    </tspan>
  </text>
)
const CardArrow = ({ color }) => (
  <>
    <path
      className={`light-${color} fillT`}
      strokeWidth="0.265"
      d="M86.33 27.323l-.026 1.457 1.786.051v1.815l3.144-2.582-3.016-2.556-.076 1.764-2.863-.051z"
    ></path>
  </>
)

const UpArrow = ({ color, moveUp }) => (
  <>
    <g className="innerButton" onClick={moveUp}>
      <rect
        strokeWidth="1"
        stroke="transparent"
        className={`light-${color}-stroke dark-${color}-fill circle `}
        stroke-width="0.5"
        // stroke-opacity:1"
        width="10"
        height="10"
        x="118"
        y="7.75"
      ></rect>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className={`light-${color}-stroke `}
        stroke-width="2"
        x="116"
        y="5.5"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </g>
  </>
)
const DownArrow = ({ color, moveDown }) => (
  <>
    <g className="innerButton" onClick={moveDown}>
      <rect
        strokeWidth="1"
        stroke="transparent"
        className={`light-${color}-stroke  dark-${color}-fill circle `}
        stroke-width="0.5"
        // stroke-opacity:1"
        width="10"
        height="10"
        x="118"
        y="19.75"
      ></rect>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className={`light-${color}-stroke circle`}
        stroke-width="2"
        x="116"
        y="17.5"      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </g>
  </>
)
