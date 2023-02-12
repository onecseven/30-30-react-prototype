import React from "react"
import { useTaskListPickerStore } from "../../store/store"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"
export const AddTaskList = () => {
  let add = useTaskListPickerStore(state => () => state.dispatch("addTaskList", null))
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="450"
      className="svgTaskCard innerAdd"
      onClick={() => add()}
      transform="scale(0.77)"
    >
      <g>
        <path
          className="medium-fill fillT"
          strokeWidth="0.265"
          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
        ></path>
        <TaskCardIcon type="add" color={"stroke"} x="60" y="9" />
      </g>
    </svg>
  )
}
