import React from "react"
import {
  About,
  Contact,
  Experience,
  Menu,
  Skills
} from "./sections"

function App() {
  return (
    <div className="bg-stone-900 text-stone-300 w-full overflow-x-hidden">
      <div className="mx-auto py-8 px-8">
        <Menu />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
