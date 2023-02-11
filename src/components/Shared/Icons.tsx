import React from "react"
import { colorStrings } from "../../store/useColor"

export interface IconProps {
  x: string
  y: string
  children?: React.ReactNode
  width?: string
  height?: string
  viewbox?: string
  hue?: "medium" | "light" | "dark"
  className?: string
}

const formatStringToCamelCase = (str) => {
  const splitted = str.split("-")
  if (splitted.length === 1) return splitted[0]
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  )
}

const getStyleObjectFromString = (str) => {
  const style = {}
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":")
    if (!property) return

    const formattedProperty = formatStringToCamelCase(property.trim())
    style[formattedProperty] = value.trim()
  })

  return style
}

export const Icon = ({ x, y, children, width = "80", height = "90", viewbox="0 0 512 512", className=""}: IconProps) => {
  return (
    <svg
      fill={colorStrings.gray.light}
      className={`icon light-fill fillT ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      x={x}
      y={y}
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
}


