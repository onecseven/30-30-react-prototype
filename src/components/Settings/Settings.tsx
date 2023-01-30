import React from "react"
import { useColor } from "../../store/useColor"

export const Settings = () => {
  let {light} = useColor()
  return (
    <>
      <div className="pickerView medium-background">
        <h1 style={{ color: light }}>Settings</h1>
      </div>
    </>
  )
}
