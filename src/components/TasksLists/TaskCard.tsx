import moment from "moment"
import React from "react"
import { Color } from "../../data"
import { TaskStore } from "../../store/taskSlice"
import { LineIcon } from "../Shared/icons/LineIcon"
import { seconds_to_mmss } from "../Shared/seconds_to_mmss"
import { SVGCard } from "./SVGCard"

interface taskCardProps {
  task: Partial<TaskStore>
}


export const TaskCard = ({ task }: taskCardProps) => {
  let { name, remaining_seconds, computed, color } = task
  // modern way
  color = "fill"
  if (name === "_BREAK") return (<LineIcon x="0" y="0"/>)
  if (!computed) computed = [moment().startOf("day"), moment().startOf("day").add(task.remaining_seconds, "seconds")]
  let [cStart, cEnd] = computed
  let cLen = seconds_to_mmss(remaining_seconds)
  return (
    <SVGCard name={name} length={cLen} cStart={cStart.format("HH:mm:ss")} cEnd={cEnd.format("HH:mm:ss")} color={color as Color}/>
  )
}
