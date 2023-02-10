import React from "react"
import { createDefaultTask } from "../../data"
import { useSettingsStore, useTimerStore } from "../../store/store"
import { TaskStore } from "../../store/taskSlice"
import { TaskCardIcon } from "../Shared/icons/taskCardIcons/TaskCardIcon"

export const AddTaskCard = () => {
  let changeView = useSettingsStore(state => (id: string) => state.dispatch("setEditTask", id))
  let addTask = useTimerStore(state => (task: Partial<TaskStore>) => state.dispatch("addTask", {id: task.id, changes: task}))
  const handleClick = () => {
    let newTask = createDefaultTask()
    addTask(newTask)
    changeView(newTask.id)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 138 38"
      xmlSpace="preserve"
      width="490"
      className="addTaskCard fadeIn"
      onClick={handleClick}
    >
      <g className={"innerAdd"}>
      <TaskCardIcon type="add" color={"gray"} x="60" y="9"/>

        <path
          className={`medium-gray fillT innerAdd`}
          strokeWidth="0.265"
          d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
        >
        </path>
      </g>

    </svg>
  )
}
