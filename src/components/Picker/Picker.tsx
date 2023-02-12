import React from "react"
import { useTaskListPickerStore } from "../../store/store"
import { useColor } from "../../store/useColor"
import { AddTaskList } from "./AddTaskList"
import { PickerCard } from "./PickerCard"

interface PickerProps {
  swap: () => void
}

export const Picker = ({ swap }: PickerProps) => {
  let { medium, light } = useColor()
  let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  let select = (id: string) => () => (dispatch("select", id), swap())
  return (
    <>
      <div className="pickerView medium-background">
        <h1 style={{ color: light }}>Select a list</h1>
          {taskLists.map((tasklist) => (
            <>
              <PickerCard name={tasklist.name} onClick={select(tasklist.id)} />
            </>
          ))}
          <AddTaskList />
      </div>
    </>
  )
}
