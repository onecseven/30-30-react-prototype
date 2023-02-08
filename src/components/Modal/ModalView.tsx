import React, { useState } from "react"
import { useColor } from "../../store/useColor"
import { Tabs } from "../Shared/Tabs/Tabs"
import { BottomBar } from "./BottomBar"
import { Modal } from "./Modal"
import { ModalColor, ModalPicker } from "./ModalColor"
import { ModalIcon } from "./ModalIcon"
import { ModalName } from "./ModalName"
import { ModalTabs } from "./ModalTabs"
import { ModalTime, ModalTimePicker } from "./ModalTime"

export type ModalViews = "COLOR" | "ICON" | "NUMPAD"

interface ModalViewProps {
  swap: () => void
}

export const ModalView = ({swap}: ModalViewProps) => {
  const [view, setView] = useState<ModalViews>("NUMPAD")
  return (
    <Modal>
      <div className="topBar">
        <ModalName />
        <ModalTime />
      </div>
      <ModalTabs swap={setView} active={view} />
      {view === "COLOR" && <ModalPicker />}
      {view === "ICON" && <ModalIcon/>}
      {view === "NUMPAD" && <ModalTimePicker/>}
      <BottomBar swap={swap}/>
    </Modal>
  )
}
