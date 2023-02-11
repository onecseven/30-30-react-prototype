import React from "react"
import { useColor } from "../../store/useColor"
import { useEditingTask } from "../../store/useEditingTask"
import { ClockIcon } from "../Shared/icons/ClockIcon"
import { GearIcon } from "../Shared/icons/GearIcon"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"
import { seconds_to_hhmmss, seconds_to_mmss } from "../Shared/seconds_to_mmss"

export const ModalTime = ({ swap, len }) => {
  return (
    <div
      className="medium-background timeBtn innerTask"
      onClick={() => swap("NUMPAD")}
    >
      <div className="deep">
        <ClockIcon x="20" y="-100" hue="dark" />
      </div>
      {/* <TimeDisplay len={len} /> */}
      <p className="hours">{len}</p>
    </div>
  )
}

const TimeDisplay = ({ len }: { len: number }) => (
  <p className="hours">{seconds_to_hhmmss(len)}</p>
)

const NumPadBtn = ({ label, cb }) => (
  <li
    aria-selected="true"
    tabIndex={0}
    className="medium-background numpadItem"
    onClick={cb}
  >
    {label}
  </li>
)

const BackspaceBtn = ({ cb }) => (
  <div className="medium-background numpadItem" onClick={cb}>
    <TaskCardIcon color="stroke" type="backspace" />
  </div>
)

const CheckmarkBtn = ({ cb }) => (
  <div className="medium-background numpadItem" onClick={cb}>
    {/* <TaskCardIcon type="checkmark" color="stroke" /> */}
  </div>
)

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, "checkmark", 0, "backspace"]

export const ModalTimePicker = ({ changeDisplay, len, sendChange }) => {
  useColor()
  let handleChange = (num: number) => {
    let currentLen: string[] = len.replaceAll(":", "").split("")
    if (num > -1 && num <= 9) {
      currentLen.shift()
      currentLen.push(String(num))
    } else if (num === -1) {
      currentLen.pop()
      currentLen.unshift("0")
    }
    currentLen.splice(2, 0, ":")
    currentLen.splice(5, 0, ":")
    changeDisplay(currentLen.join(""))
    handleConfirm(currentLen.join(""))
  }
  let handleConfirm = (changedLen) => {
    let currentLen: string[] = changedLen.replaceAll(":", "").split("")
    let hours = Number(currentLen.slice(0, 2).join("")) * 3600
    let minutes = Number(currentLen.slice(2, 4).join("")) * 60
    let seconds = Number(currentLen.slice(4, 6).join(""))
    let total = hours + minutes + seconds
    if (total < 60) seconds = 60
    else if (total >= 86400) total = 86399 //1 day
    sendChange({ length: total, remaining_seconds: total })
  }
  return (
    <ul className="numpad fadeIn">
      {labels.map((item) => {
        if (typeof item === "number")
          return <NumPadBtn label={item} cb={() => handleChange(item)} />
        else if (item === "backspace")
          return <BackspaceBtn cb={() => handleChange(-1)} />
        else if (item === "checkmark")
          return <CheckmarkBtn cb={() => console.log("This button does nothing.")} />
      })}
    </ul>
  )
}
