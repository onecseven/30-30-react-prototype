import React from "react"
import { useEditingTask } from "../../store/useEditingTask"

export const ModalName = () => {
  let [current, change] = useEditingTask()
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change({ name: e.target.value.slice(0, 12) })
  }
  return (
    <input
      type="text"
      defaultValue={current.name}
      onChange={handleChange}
      className="medium-background nameEditField fadeIn"
    ></input>
  )
}
