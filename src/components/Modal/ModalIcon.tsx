import React from "react"
import { useColor } from "../../store/useColor"
import { useEditingTask } from "../../store/useEditingTask"
import { taskIcon } from "../../types"
import IconRegistry from "../Shared/icons/taskCardIcons/IconRegistry"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"
import { onEnter } from "../Shared/onEnter"

const keys = Object.keys(IconRegistry).filter(
  (item) => item !== "close" && item !== "backspace"
)

const ModalIconItem = ({ children, icon, change, selected}) => (
  <label
    className={`iconItem  ${selected ? "selectedIcon" : ""} fadeIn`}
    role="tab"
    aria-selected="true"
    tabIndex={0}
    htmlFor={`${icon}-icon`}
    onClick={change}
    onKeyUp={onEnter(change)}
  >
    {children}
  </label>
)

//TODO show current icon

export const ModalIcon = () => {
  let [{icon: currentIcon}, change] = useEditingTask()
  let handleChange = (icon: string) => change({ icon })
  useColor()
  return (
    <div className="iconPicker  medium-background ">
      {keys.map((icon) => (
        <ModalIconItem icon={icon} change={() => handleChange(icon)} selected={icon === currentIcon}>
          <TaskCardIcon type={icon} color="stroke" />
        </ModalIconItem>
      ))}
    </div>
  )
}
