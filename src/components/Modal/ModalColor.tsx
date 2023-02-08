import React from "react"
import { useColor } from "../../store/useColor"
import { useEditingTask } from "../../store/useEditingTask"
import { Color } from "../../types"

const colors = [
  "gray",
  "orange",
  "red",
  "green",
  "blue",
  "forest",
  "yellow",
  "violet",
  "purple",
  "pink",
  "aqua",
] as Color[]

export const ModalColor = () => {
  return <div className="medium-background pickerBtn"></div>
}

export const ModalPicker = () => {
  useColor()
  let [{ color: currentColor }, change] = useEditingTask()
  let handleChange = (color: Color) => change({ color })
  return (
    <ul id="colorPicker" className="medium-background colorPicker  ">
      {colors.map((color) => (
        <li
          role="tab"
          id={`color-${color}`}
          aria-selected="true"
          tabIndex={0}
          onClick={() => handleChange(color)}
          className={`colorSquare dark-${color} background-darken  ${
            color === currentColor ? "selected" : ""
          } fadeIn`}
        ></li>
      ))}
    </ul>
  )
}
