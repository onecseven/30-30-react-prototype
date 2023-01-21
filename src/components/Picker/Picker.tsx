import React from "react"
import { useTaskListPickerStore } from "../../store/store"
import { PickerCard } from "./PickerCard"

export const Picker = () => {
  let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  let select = (id: string) => () => dispatch("select", id)
  return (
    <>
      {taskLists.map((tasklist) => (
        <>
          <PickerCard name={tasklist.name} onClick={select(tasklist.id)}/>
        </>
      ))}
    </>
  )
}

// TODO Picker Button
// Picker View
//
