import moment from "moment"
import React from "react"
import { useSettingsStore, useTimerStore } from "../../store/store"
import { TaskStore } from "../../store/taskSlice"
import { Color } from "../../types"
import { LineIcon } from "../Shared/icons/LineIcon"
import { formatSeconds, seconds_to_mmss } from "../Shared/seconds_to_mmss"
import { SVGCard } from "./SVGCard"
interface taskCardProps {
  task: Partial<TaskStore>
}

export const TaskCard = ({ task }: taskCardProps) => {
  let { name, remaining_seconds, computed, color, icon, id } = task
  let [layout, dispatch] = useSettingsStore((state) => [
    state.layout,
    state.dispatch,
  ])
  let [taskListDispatch, modernColor] = useTimerStore((state) => [state.dispatch, state.tasks[0].color])
  if (name === "_BREAK") return <LineIcon x="0" y="0" />
  if (layout === "MODERN") color = modernColor
  if (!computed)
    computed = [
      moment().startOf("day"),
      moment().startOf("day").add(task.remaining_seconds, "seconds"),
    ]

  let [cStart, cEnd] = computed
  let cLen = formatSeconds(remaining_seconds)
  let edit = () => dispatch("setEditTask", id)
  let payload = { id, changes: null }
  let moveUp = () => taskListDispatch("moveUp", payload)
  let moveDown = () => taskListDispatch("moveDown", payload)
  const move: [() => void, () => void] = [moveUp, moveDown]
  return (
    <SVGCard
      name={name}
      length={cLen}
      cStart={cStart.format("HH:mm:ss")}
      cEnd={cEnd.format("HH:mm:ss")}
      color={color as Color}
      layout={layout}
      icon={icon}
      edit={edit}
      move={move}
    />
  )
}
