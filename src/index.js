import React from "react"
import ReactDOM from "react-dom/client"
import {
  About,
  Contact,
  Experience,
  Menu,
  Skills
} from "./sections"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <div className="bg-stone-900 text-stone-300 w-full overflow-x-hidden">
      <div className="mx-auto py-8 px-8 sm:w-[40rem]">
        <Menu />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  </React.StrictMode>
)
