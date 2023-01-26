import { SvgBtn, SVGBtnProps } from "../Shared/Btn"
import React from "react"

type TimerPositions =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "topRight"
  | "topLeft"

let positions: { [key in TimerPositions]: [number, number] } = {
  bottom: [325, 575],
  bottomLeft: [80, 400],
  bottomRight: [570, 400],
  top: [325, 75],
  topRight: [485, 140],
  topLeft: [165, 140],
}

interface TimerBtnProps {
  pos: TimerPositions
  cb: () => void
  className?: string
  children?: React.ReactNode
}
export const TimerBtn = ({
  pos,
  cb,
  className = "",
  children = null,
}: TimerBtnProps) => {
  let [x, y] = positions[pos]
  return (
    <SvgBtn x={x} y={y} cb={cb} className={className}>
      {children}
    </SvgBtn>
  )
}
