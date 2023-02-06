import React from "react"
import { GearIcon } from "../Shared/icons/GearIcon"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

export const ModalTime = () => (
  <div className="medium-background settingsBtn">
    <GearIcon x="0" y="0" />
  </div>

)

const NumPadBtn = (label) => <div className="medium-background numpadItem" data-value={label}>{label}</div>

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
  (<div className="medium-background numpadItem">
    <TaskCardIcon color="stroke" type="close" />
  </div>),
  0,
  (<div className="medium-background numpadItem">
    <TaskCardIcon type="checkmark" color="stroke" />
  </div>)
].map((item) => {
  if (typeof item === "number") return NumPadBtn(item)
  else return item
})

export const ModalTimePicker = () => {
  return (
    <div className="numpad">
      {labels}
    </div>
  )
}
