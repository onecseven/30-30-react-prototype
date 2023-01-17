import * as React from "react"
import { Licon } from "../Icon"

interface btnProps {
  label: string
  cb: () => void
}

export const Btn = ({ cb, label }: btnProps) => {
  return <button onClick={cb}>{label}</button>
}

export interface SVGBtnProps {
  x: number
  y: number
  className?: string
  color?: string
  cb?: () => void
  children?: React.ReactNode
}
// { cb, label }: btnProps
export const SvgBtn = ({
  x,
  y,
  className = "",
  color = "#fcb2b6",
  cb,
  children = null,
}: SVGBtnProps) => {
  return (
    <>
      {children}

      <circle
        fill="transparent"
        stroke={color}
        className={"btnCircle" + " " + className}
        r="62.5"
        cx={x}
        cy={y}
        strokeWidth="8"
        onClick={cb}
      ></circle>
    </>
  )
}
