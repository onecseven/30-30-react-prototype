import React from 'react'
import { useTimerStore } from '../../store/store'
import { useColor } from '../../store/useColor'
export const TaskListName = () => {
  let {light, medium} = useColor()
  let label = useTimerStore(state => state.name)
  return (
    <button style={{"background-color": medium, "color": light}} className="tName">{label}</button>
  )
}
