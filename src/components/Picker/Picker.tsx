import React from "react"
import { useTaskListPickerStore } from "../../store/store"
import { PickerCard } from "./PickerCard"

interface PickerProps {
  swap: () => void
}

export const Picker = ({swap}: PickerProps) => {
  let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  let select = (id: string) => () => (dispatch("select", id), swap())
  return (
    <>
      <div className="pickerView">
        <h1 style={{ color: "#fcb2b6" }}>Select a list</h1>
        {taskLists.map((tasklist) => (
          <>
            <PickerCard name={tasklist.name} onClick={select(tasklist.id)} />
          </>
        ))}
      </div>
    </>
  )
}

