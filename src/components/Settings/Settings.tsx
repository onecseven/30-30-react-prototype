import React from "react"
import { useColor } from "../../store/useColor"
import { LayoutBtn, LoopBtn, VolumeBtn } from "./SettingsBtn"

interface PickerProps {
  swap: () => void
}

export const Settings = ({ swap }: PickerProps) => {
  useColor()
  return (
    <>
      <div className="fadeIn settingsView medium-background">
        <div className="innerSettings">
          <VolumeBtn />
          <LayoutBtn />
          <LoopBtn />
        </div>
      </div>
    </>
  )
}
