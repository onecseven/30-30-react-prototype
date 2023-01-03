import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import data from "./data"
import { TimerStore } from "./store/vanillastore"

const { getState, setState, subscribe, destroy } = TimerStore
getState().dispatch("setTaskList", data)

const body = document.getElementsByTagName("BODY")[0]
const root = document.createElement("div")
root.id = "root"
body.appendChild(root)
ReactDOM.render(<App />, root)
