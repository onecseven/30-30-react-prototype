import React from "react"
import { useColor } from "../../store/useColor"
import { FolderIcon } from "../Shared/Icons"

interface PickerButtonProps {
  swap: () => void
}

export const PickerButton = ({swap}: PickerButtonProps) => {
  let {medium} = useColor()
  return (
    <button style={{"background-color": medium}} className="pickerBtn" onClick={swap}>
      <FolderIcon x="20" y="20"/>
    </button>
  )
}
