import React from "react"
import { SendToBottom, DoneBtn, LoopBtn } from "./components/Buttons/SendToBottom"
import { CurrentTask } from "./components/CurrentTask"
import { TaskList } from "./components/TaskList"
import { StartBtn, StopBtn} from "./components/Buttons/PlayBtn"

import { useTimerStore } from "./store/store"
export const App = () => {
  let status = useTimerStore((state) => state.status)
  let looping = useTimerStore((state) => state.looping)
  return (
    <>
      <div className="App">
        <h1> Timer State: {status} </h1>
        <h2> Looping: {looping ? "Yes":"No"}</h2>
        <StartBtn/>
        <StopBtn/>
        <SendToBottom />
        <DoneBtn/>
        <LoopBtn/>
      </div>
      <TaskList></TaskList>
    </>
  )
}

export default App
