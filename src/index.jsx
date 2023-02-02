import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import data from "./data"
import { TimerStore, PickerStor } from "./store/vanillastore"

TimerStore.getState().dispatch("setTaskList", data)
PickerStor.getState().dispatch("set", [data])

const body = document.getElementsByTagName("BODY")[0]
body.id = "root"

ReactDOM.render(<App />, body)


