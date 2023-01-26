import React from "react"
import {useState} from "react"
import { useTimerStore, useTaskStor } from "../store/store"
import { TimerBtn } from "./Timer/TimerButtons"
import {
  CheckMarkIcon,
  OpenLockIcon,
  SendToBottomIcon,
  TrashIcon,
  LockIcon
} from "./Shared/Icons"

//TODO Create the layout you want actually

interface LabelProps {
  x: string
  y: string
  label: string
}
let labelMaker = (seconds: number) => {
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  return min
}

const BtnLabel = ({ label = "", x, y }: LabelProps) => {
  return (
    <text
     className="light-fill fillT bold"
      x={x}
      y={y}
      fontSize="48"
      xmlSpace="preserve"
    >
      <tspan x={x} y={y}  fontSize="48">
        {label}
      </tspan>
    </text>
  )
}

export const ClassicTimerButtons = () => {
  const [isLocked, setIsLocked] = useState(false)
  let { dispatch } = useTimerStore((state) => state)
  let taskDispatch = useTaskStor((state) => state.dispatch)
  let remaining = useTaskStor((state) => state.remaining_seconds)
  let play = () => dispatch("start", null)
  let stop = () => dispatch("stop", null)
  let toggleLoop = () => dispatch("toggleLoop", null)
  let send_to_bottom = () => dispatch("sendBottom", null)
  let done = () => dispatch("sendBottom", "preserve")
  let add = () => taskDispatch("add", null)
  let take = () => taskDispatch("take", null)
  let toggleLock = () => setIsLocked(!isLocked)
  let label = labelMaker(remaining)

  return (
    <>
      <TimerBtn pos="top" cb={done}>
        <CheckMarkIcon x="286.5" y="-250" />
      </TimerBtn>
      <TimerBtn pos="topLeft" cb={send_to_bottom}>
        <SendToBottomIcon x="115" y="97" />
      </TimerBtn>
      {!isLocked && <TimerBtn pos="topRight" cb={() => null}>
        <TrashIcon x="455" y="-190" />
      </TimerBtn>}
      <TimerBtn pos="bottom" cb={toggleLock}>
        {isLocked ? <LockIcon x="286" y="247"/>   : <OpenLockIcon x="286" y="247" />}
      </TimerBtn>
      //FIXME position these correctly
      <TimerBtn pos="bottomLeft" cb={take}>
        <BtnLabel x="50" y="420" label={`-${label}m`} />
      </TimerBtn>
      <TimerBtn pos="bottomRight" cb={add}>
        <BtnLabel label={`+${label}m`} x="525" y="420" />
      </TimerBtn>
    </>
  )
}