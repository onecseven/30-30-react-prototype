import React from "react"
import { useTimerStore } from "../../store/store"
import { LoopIcon, NoLoopIcon } from "../Shared/icons/LoopIcon"
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
  let {dispatch, looping} = useTimerStore(state => state)
  let toggleLoop = () => dispatch("toggleLoop", null)
  return (
    <div className="fadeIn dark-background pickerBtn settings" onClick={toggleLoop}>
      <svg>
        {looping ? <NoLoopIcon x="15" y="6"/> :  <LoopIcon x="15" y="6" /> }
      </svg>
    </div>
  )
}
