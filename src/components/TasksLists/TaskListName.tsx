import React, {useState} from "react"
import { useSettingsStore, useTimerStore } from "../../store/store"
import { useEditingTask } from "../../store/useEditingTask"

export const TaskListName = () => {
  let [editing, setEditing] = useState(false)
  let toggleEditing = () => setEditing((state) => !state)
  let [label, dispatch, color] = useTimerStore((state) => [state.name, state.dispatch, state.getState().color])
  let view = useSettingsStore(state => state.currentView)
  let change = (newName: string) => dispatch("changeName", newName)
  switch (view) {
    case "PICKER":
      label = "Select a list"
      break
    case "SETTINGS":
      label = "Settings"
      break
    case "TIMER":
      break
  }
  return (
    <div className="tName medium-background bgT fadeIn" >
      {editing ? <EditName def={label} toggle={toggleEditing} change={change} color={color} /> : (<span onClick={toggleEditing} className={`light-${color}-color cT`}> {label}</span>) }
    </div>
  )
}

export const EditName = ({color, toggle, change, def}) => {
  // let [current, change] = useEditingTask()
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change(e.target.value.slice(0, 12))
  }
  return (
    <input
      type="text"
      defaultValue={def}
      onChange={handleChange}
      onBlur={toggle}
      className={`medium-background light-${color}-color taskListNameEditField fadeIn`} 
    ></input>
  )
}
