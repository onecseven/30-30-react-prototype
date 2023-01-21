import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import data, {second} from "./data"
import { TimerStore, PickerStor } from "./store/vanillastore"

TimerStore.getState().dispatch("setTaskList", data)
PickerStor.getState().dispatch("set", [data, second])

const body = document.getElementsByTagName("BODY")[0]
const root = document.createElement("div")

root.id = "root"

body.appendChild(root)
ReactDOM.render(<App />, root)
