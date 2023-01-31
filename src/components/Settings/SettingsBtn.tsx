import React from "react"
import { LoopIcon } from "../Shared/icons/LoopIcon"
import { VolumeIcon } from "../Shared/icons/VolumeIcon"
import { BtnLabel } from "../Timer/BtnLabel"

export const VolumeBtn = () => {
  return (
    <div className="fadeIn dark-background pickerBtn settings">
      <VolumeIcon x="10" y="10" />
    </div>
  )
}

export const LayoutBtn = () => {
  return (
    <div className="fadeIn dark-background pickerBtn settings">
      <svg>
        <BtnLabel label="MODERN" x="9" y="50" size="25" />
      </svg>
    </div>
  )
}
export const LoopBtn = () => {
  return (
    <div className="fadeIn dark-background pickerBtn settings">
      <svg>
        <LoopIcon x="15" y="6" />
      </svg>
    </div>
  )
}
