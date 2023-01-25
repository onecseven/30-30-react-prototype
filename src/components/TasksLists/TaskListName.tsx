import React from 'react'
import { useTimerStore } from '../../store/store'
export const TaskListName = () => {
  let label = useTimerStore(state => state.name)
  return (
    <button className="tName">{label}</button>
  )
}
