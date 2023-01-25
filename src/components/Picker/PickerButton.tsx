import React from "react"
import { FolderIcon } from "../Shared/Icons"

interface PickerButtonProps {
  swap: () => void
}

export const PickerButton = ({swap}: PickerButtonProps) => {
  return (
    <button className="pickerBtn" onClick={swap}>
      <FolderIcon x="20" y="20"/>
    </button>
  )
}
