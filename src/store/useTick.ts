import { useEffect } from "react"
import { useTaskStor } from "./store"
import { colorStrings } from "./useColor"

export const MAX = 1600

// a is to b as x is to {y} (solves for y)
const solve_for_y = (a: number, b: number, x: number) => {
  return (x * b) / a
}

export const useTick = () => {
  let { length, remaining_seconds,color } = useTaskStor((state) => state)
  let fLen = MAX - solve_for_y(length, remaining_seconds, MAX)
  useEffect(() => {
    //@ts-ignore
    document.getElementById("innerCircle").style = `stroke-dasharray: ${fLen}, ${MAX};stroke:${colorStrings[color].dark}`
    return () => {}
  }, [remaining_seconds])

  return [fLen, MAX]
}
