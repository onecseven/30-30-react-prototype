import React from "react"
import { useColor } from "../../store/useColor"
import IconRegistry from "../Shared/icons/taskCardIcons/IconRegistry"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

const keys = Object.keys(IconRegistry).filter((item) => item !== "close")

export const ModalIcon = () => {
  useColor()
  return (
    <div className="iconPicker medium-background">
      {keys.map((icon) => (
        <label
          className={`iconItem `}
          role="tab"
          aria-selected="true"
          tabIndex={0}
          htmlFor={`${icon}-icon`}
          // onKeyUp={onEnter(e)}
        >
          <TaskCardIcon type={icon} color="stroke" />
        </label>
      ))}
    </div>
  )
}
