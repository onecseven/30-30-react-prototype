import React from "react"
import { Color } from "../../data"
import { colorStrings } from "../../store/useColor"

type SVGCardProps = {
  name: string
  length: string
  cStart: string
  cEnd: string
  color: Color
  icon?: string
  fill?: string
}

export const SVGCard = ({
  name,
  length,
  cEnd,
  cStart,
  color,
}: SVGCardProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="490"
      className="svgTaskCard fadeIn"
    >
      <g>
        <path
          className={`dark-${color} fillT`}
          strokeWidth="0.265"
          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
        ></path>

        <CardName name={name} color={color} />
        <CardLength length={length} color={color} />
        <CompStart cStart={cStart} color={color} />
        <CardArrow color={color} />
        <CompEnd cEnd={cEnd} color={color} />
      </g>
    </svg>
  )
}

const CardName = ({ name = "Name", color }: Partial<SVGCardProps>) => {
  return (
    <text
      x="28"
      y="24.881"
      className={`light-${color} fillT`}
      strokeWidth="0.265"
      fontSize="16.933"
      xmlSpace="preserve"
    >
      <tspan x="28" y="20.881" strokeWidth="0.265" fontSize="16.933">
        {name}
      </tspan>
    </text>
  )
}

const CardLength = ({ length = "00:00", color }) => (
  <text
    x="10"
    y="31.106"
    className={`light-${color} fillT`}
    strokeWidth="0.199"
    fontSize="6.375"
    xmlSpace="preserve"
  >
    <tspan x="10" y="31.106" strokeWidth="0.199" fontSize="6.375">
      {length}
    </tspan>
  </text>
)
const CompStart = ({ cStart = "xx:xx:xx", color }) => (
  <text
    x="59.500"
    y="31.106"
    className={`light-${color} fillT`}
    strokeWidth="0.265"
    fontSize="7"
  >
    <tspan x="59.500" y="31.106" strokeWidth="0.265">
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
const CardArrow = ({color}) => (
  <>
    <path
      className={`light-${color} fillT`}
      strokeWidth="0.265"
      d="M86.33 27.323l-.026 1.457 1.786.051v1.815l3.144-2.582-3.016-2.556-.076 1.764-2.863-.051z"
    ></path>
  </>
)
