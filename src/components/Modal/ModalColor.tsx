import React from "react"
import { useColor } from "../../store/useColor"
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
  "gray",
] as Color[]

export const ModalColor = () => {
  return <div className="medium-background pickerBtn"></div>
}

//IMPLEMENT if selected show blue border around them
export const ModalPicker = () => {
  useColor()
  return (
    <ul id="colorPicker" className="colorPicker medium-background">
      {colors.map((color) => (
        <li
          role="tab"
          id={`color-${color}`}
          aria-selected="true"
          tabIndex={0}
          className={`colorSquare dark-${color}`}
        ></li>
      ))}
    </ul>
  )
}
