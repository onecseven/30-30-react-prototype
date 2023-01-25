import React from 'react'
import { useTimerStore } from '../../store/store'
export const TaskListName = () => {
  let label = useTimerStore(state => state.name)
  return (
    <div className="tName">{label}</div>
  )
}
