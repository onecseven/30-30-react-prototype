import React from "react"
import { useTimerStore } from "../../store/store"
export const TaskListName = () => {
  let label = useTimerStore((state) => state.name)
  return (
    <div className="tName medium-background bgT ">
      <span className="light-color cT"> {label}</span>
    </div>
  )
}

//IMPLEMENT adding 
// on click swap to input to change tasklist name

// export const EditName = () => {
//   let [current, change] = useEditingTask()
//   let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     change({ name: e.target.value.slice(0, 12) })
//   }
//   return (
//     <input
//       type="text"
//       defaultValue={current.name}
//       onChange={handleChange}
//       className="medium-background nameEditField fadeIn"
//     ></input>
//   )
// }
