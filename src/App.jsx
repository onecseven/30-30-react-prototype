import React from "react"
import {
  SendToBottom,
  DoneBtn,
  LoopBtn,
} from "./components/Buttons/SendToBottom"
import { StartBtn, StopBtn } from "./components/Buttons/PlayBtn"
import { Timer } from "./components/Timer"


import { useTimerStore } from "./store/store"
import { TaskList } from "./components/TasksLists/TaskList"
import { TotalLength } from "./components/TotalLength"
export const App = () => {
  let status = useTimerStore((state) => state.status)
  let looping = useTimerStore((state) => state.looping)
  return (
    <>
      <div className="App">
        {/* ADD TASKLIST NAME*/}
        <TotalLength/>
        <Timer />
        {/* <h1> Timer State: {status} </h1>
          <h2> Looping: {looping ? "Yes" : ""}</h2> */}
        {/* <StartBtn />No
          <StopBtn />
          <SendToBottom />
          <DoneBtn />
          <LoopBtn /> */}
        <TaskList/>
      </div>
    </>
  )
}

export default App
