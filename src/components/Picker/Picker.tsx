import React from "react"
import { useTaskListPickerStore } from "../../store/store"
import { useColor } from "../../store/useColor"
import { AddTaskList } from "./AddTaskList"
import { PickerCard } from "./PickerCard"

interface PickerProps {
  swap: () => void
}

export const Picker = ({ swap }: PickerProps) => {
  useColor()
  let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  let select = (id: string) => () => (dispatch("select", id), swap())
  let del = (id: string) => () => dispatch("delete", {id, changes: null})
  return (
    <>
      <div className="pickerView dark-background fadeIn">
          {taskLists.map((tasklist) => (
            <>
              <PickerCard name={tasklist.name} select={select(tasklist.id)} del={del(tasklist.id)} />
            </>
          ))}
          <AddTaskList />
      </div>
    </>
  )
}
