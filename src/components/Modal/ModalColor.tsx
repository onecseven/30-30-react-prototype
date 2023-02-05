import React from "react"
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
  return (
    <div  className="medium-background pickerBtn">
    </div>
  )
}

export const ModalPicker = () => {
  return (
    <div className="colorPicker medium-background">
      {colors.map(color => (<div className={`colorSquare dark-${color}`}></div>))}
    </div>
  )
}