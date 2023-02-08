import React from "react"
import { useEditingTask } from "../../store/useEditingTask"
import { GearIcon } from "../Shared/icons/GearIcon"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

//TODO show time, make it a stack?
// gotta convert currentLenght to mm:ss
export const ModalTime = () => {
  let [{length: currentLength}, change ] = useEditingTask()
  console.log(currentLength) 
  return (
  <div className="medium-background timeBtn">
    <GearIcon x="0" y="0" />
  </div>
)}

const NumPadBtn = (label) => (
  <li
    aria-selected="true"
    tabIndex={0}
    className="medium-background numpadItem"
  >
    {label}
  </li>
)

const labels = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  <div className="medium-background numpadItem">
  </div>,
  0,
  <div className="medium-background numpadItem">
    {/* <TaskCardIcon type="checkmark" color="stroke" /> */}
    <TaskCardIcon color="stroke" type="backspace" />
  </div>,
].map((item) => {
  if (typeof item === "number") return NumPadBtn(item)
  else return item
})

export const ModalTimePicker = () => {
  return <ul className="numpad fadeIn">{labels}</ul>
}
