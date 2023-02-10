import { useEffect } from "react"
import { useTimerStore, useSettingsStore } from "./store"
import { TaskChange, TaskListStore } from "./taskListSlice"
import { TaskStore } from "./taskSlice"

export const useEditingTask = (): [TaskStore, (change: TaskChange["changes"]) => void, TaskListStore["dispatch"]] => {
  let [tasks, dispatch] = useTimerStore((state) => [
    state.tasks,
    state.dispatch,
  ])
  let taskID = useSettingsStore((state) => state.editingTaskID)
  let currentTask: TaskStore | null = null
  if (taskID) {
    currentTask = tasks.find((item) => item.id === taskID)
    let sendPartialChange = (change: TaskChange["changes"]) =>
      dispatch("editTask", {
        id: taskID,
        changes: change,
      })
    return [currentTask, sendPartialChange, dispatch]
  } else return [null, (change: TaskChange["changes"]) => console.error("No task selected. This shouldn't happen."), dispatch]
}
