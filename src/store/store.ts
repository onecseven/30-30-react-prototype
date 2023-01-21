import create from "zustand"
import { TaskStor, TimerStore, PickerStor } from "./vanillastore"

export const useTimerStore = create(TimerStore)
export const useTaskStor = create(TaskStor)
export const useTaskListPickerStore = create(PickerStor)
