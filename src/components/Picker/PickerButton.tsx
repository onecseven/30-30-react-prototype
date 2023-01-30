import React from "react"
import { FolderIcon } from "../Shared/Icons"

interface PickerButtonProps {
  setView: () => void
}

export const PickerButton = ({setView}: PickerButtonProps) => {
  return (
    <div  className="medium-background  pickerBtn" onClick={setView}>
      <FolderIcon x="10" y="0"/>
    </div>
  )
}
