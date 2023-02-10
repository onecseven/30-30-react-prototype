import React from "react"
import {useState} from "react"
import { useTimerStore, useTaskStor } from "../../store/store"
import { TimerBtn } from "./TimerButtons"
import { LockIcon } from "../Shared/icons/LockIcon"
import { TrashIcon } from "../Shared/icons/TrashIcon"
import { SendToBottomIcon } from "../Shared/icons/SendToBottomIcon"
import { OpenLockIcon } from "../Shared/icons/OpenLockIcon"
import { CheckMarkIcon } from "../Shared/icons/CheckMarkIcon"
import { BtnLabel } from "./BtnLabel"


let labelMaker = (seconds: number) => {
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  return min
}


export const ClassicTimerButtons = () => {
  const [isLocked, setIsLocked] = useState(false)
  let { dispatch } = useTimerStore((state) => state)
  let taskDispatch = useTaskStor((state) => state.dispatch)
  let remaining = useTaskStor((state) => state.remaining_seconds)
  let play = () => dispatch("start", null)
  let stop = () => dispatch("stop", null)
  let del = () => dispatch("delete", null)
  let send_to_bottom = () => dispatch("sendBottom", "preserve")
  let done = () => dispatch("sendBottom", null)
  let add = () => taskDispatch("add", null)
  let take = () => taskDispatch("take", null)
  let toggleLock = () => setIsLocked(!isLocked)
  let label = labelMaker(remaining)

  return (
    <>
      <TimerBtn pos="top" cb={done}>
        <CheckMarkIcon x="286.5" y="32" />
      </TimerBtn>
      <TimerBtn pos="topLeft" cb={send_to_bottom}>
        <SendToBottomIcon x="115" y="97" />
      </TimerBtn>
      {!isLocked && <TimerBtn pos="topRight" cb={del}>
        <TrashIcon x="458" y="103"  />
      </TimerBtn>}
      <TimerBtn pos="bottom" cb={toggleLock}>
        {isLocked ? <LockIcon x="290" y="537" height="70"/>   : <OpenLockIcon x="295" y="537" height="70"/>}
      </TimerBtn>

      <TimerBtn pos="bottomRight" cb={add}>
        <BtnLabel label={`+${label}m`} x={label > 5 ? "522.5" : "525"} y={label > 5 ? "415" : "420"} size={label > 5 ? "40px" : "48px"}/>
      </TimerBtn>
      <TimerBtn pos="bottomLeft" cb={take}>
        <BtnLabel x={label > 5 ? "45" : "50"} y={label > 5 ? "415" : "420"} label={`-${label}m`} size={label > 5 ? "40px" : "48px"} />
      </TimerBtn>

    </>
  )
}