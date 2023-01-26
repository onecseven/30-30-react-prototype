import React from "react"
import { useColor } from "../../store/useColor"

type SVGCardProps = {
  name: string
  length: string
  cStart: string
  cEnd: string
  icon?: string
  fill?: string  
}

export const SVGCard = ({ name, length, cEnd, cStart }: SVGCardProps) => {
  let {dark, light} = useColor()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="490"
      className="svgTaskCard"
      >
      <g >
        <path
          fill={dark}
          strokeWidth="0.265"
          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
          ></path>

        <CardName fill={light} name={name} />
        <CardLength fill={light}  length={length} />
        <CompStart fill={light}  cStart={cStart} />
        <CardArrow fill={light}  />
        <CompEnd fill={light}  cEnd={cEnd} />
      </g>
    </svg>
  )
}


const CardName = ({ name = "Name", fill}: Partial<SVGCardProps>) => {
  return (
    <text
      x="28"
      y="24.881"
      fill={fill}
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

const CardLength = ({ length = "00:00", fill}) => (
  <text
  x="10"
  y="31.106"
  fill={fill}
  strokeWidth="0.199"
  fontSize="6.375"
  xmlSpace="preserve"
  >
    <tspan x="10" y="31.106" strokeWidth="0.199" fontSize="6.375">
      {length}
    </tspan>
  </text>
)
const CompStart = ({ cStart = "xx:xx:xx", fill}) => (
  <text
  x="59.500"
  y="31.106"
  fill={fill}
  strokeWidth="0.265"
  fontSize="7"
  >
    <tspan x="59.500" y="31.106" strokeWidth="0.265">
      {cStart}
    </tspan>
  </text>
)

const CompEnd = ({ cEnd = "xx:xx:xx", fill}) => (
  <text
  x="94.202"
  y="31.165"
  fill={fill}
  strokeWidth="0.265"
  fontSize="7"
  >
    <tspan x="94.202" y="31.165" strokeWidth="0.265">
      {cEnd}
    </tspan>
  </text>
)
const CardArrow = ({fill}) => (
  <>
    <path
      fill={fill}
      strokeWidth="0.265"
      d="M86.33 27.323l-.026 1.457 1.786.051v1.815l3.144-2.582-3.016-2.556-.076 1.764-2.863-.051z"
      ></path>
  </>
)
