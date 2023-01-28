import React from "react"
import { PickerButton } from "./Picker/PickerButton"
import { GearIcon } from "./Shared/Icons"
import { TaskListName } from "./TasksLists/TaskListName"

interface TopBarProps {
  swap: () => void
}

const SettingsButton = () => (
  <div className="medium-background settingsBtn">
    <GearIcon x="0" y="0" />
  </div>
)

export const TopBar = ({ swap }: TopBarProps) => (
  <div className="topBar">
    <PickerButton swap={swap} />
    <TaskListName />
    <SettingsButton />
  </div>
)
