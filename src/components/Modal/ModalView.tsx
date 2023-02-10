import React, { useState } from "react"
import { useColor } from "../../store/useColor"
import { useEditingTask } from "../../store/useEditingTask"
import { seconds_to_hhmmss } from "../Shared/seconds_to_mmss"
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
  const [view, setView] = useState<ModalViews>("ICON")
  let [{ length }, change] = useEditingTask()
  let [displayLen, setLen] = useState<string>(seconds_to_hhmmss(length))
  return (
    <Modal>
      <div className="modalTopBar">
        <ModalName />
        <ModalTime swap={setView} len={displayLen} />
      </div>
      <ModalTabs swap={setView} active={view} />
      {view === "COLOR" && <ModalPicker />}
      {view === "ICON" && <ModalIcon/>}
      {view === "NUMPAD" && <ModalTimePicker changeDisplay={setLen} len={displayLen} sendChange={change}/>}
      <BottomBar swap={swap}/>
    </Modal>
  )
}
