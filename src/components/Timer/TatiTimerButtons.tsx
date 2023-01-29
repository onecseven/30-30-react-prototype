import React from "react"
import { useTimerStore, useTaskStor } from "../../store/store"
import { TimerBtn } from "./TimerButtons"
import {
  SendToBottomIcon,
  LoopIcon,
  NoLoopIcon
} from "../Shared/Icons"
import { BtnLabel } from "./BtnLabel"


let labelMaker = (seconds: number) => {
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  return min
}

export const TatiTimerButtons = () => {
  let { dispatch, looping } = useTimerStore((state) => state)
  let taskDispatch = useTaskStor((state) => state.dispatch)
  let remaining = useTaskStor((state) => state.remaining_seconds)
  let toggleLoop = () => dispatch("toggleLoop", null)
  let send_to_bottom = () => dispatch("sendBottom", "preserve")
  let add = () => taskDispatch("add", null)
  let take = () => taskDispatch("take", null)
  let label = labelMaker(remaining)

  return (
    <>

      <TimerBtn pos="topLeft" cb={add}>
        <BtnLabel x="122" y="155" label={`-${label}m`}/>
      </TimerBtn>

      <TimerBtn pos="topRight" cb={take}>
        <BtnLabel label={`+${label}m`} x="445" y="155" />
      </TimerBtn>
 
      <TimerBtn pos="bottomLeft" cb={send_to_bottom}>
        <SendToBottomIcon x="43" y="360" />
      </TimerBtn>

      <TimerBtn pos="bottomRight" cb={toggleLoop}>
        {looping ? <NoLoopIcon x="530" y="75"/> :  <LoopIcon  x="530" y="75" />}
      </TimerBtn>
    </>
  )
}