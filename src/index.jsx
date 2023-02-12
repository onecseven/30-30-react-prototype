import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"


const body = document.getElementsByTagName("BODY")[0]
body.id = "root"

ReactDOM.render(<App />, body)


