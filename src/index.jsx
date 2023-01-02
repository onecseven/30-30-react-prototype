import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"


console.log("here")
const body = document.getElementsByTagName("BODY")[0]
const root = document.createElement("div")
root.id = "root"
body.appendChild(root)
ReactDOM.render(<App />, root)
