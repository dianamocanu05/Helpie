import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import Needer from "./needer-app/Needer"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)