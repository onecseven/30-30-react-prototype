import React from "react"
import { PickerButton } from "./PickerButton"
import { TaskListName } from "./TasksLists/TaskListName"


interface TopBarProps {
  swap: () => void
}



export const TopBar = ({swap}: TopBarProps) => {
  return (
    <div className="topBar">
      <PickerButton swap={swap} />
      <TaskListName />
    </div>
  )
}
