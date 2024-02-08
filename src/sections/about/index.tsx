import React from "react"
import { Icon } from "../../components"

const About = () => (
  <div>
    <div className="text-white flex items-center mb-10">
      <img className="w-20 h-20 mr-8 rounded-full" src="avatar.png" />

      <div>
        <div className="text-3xl font-semibold text-stone-300">Artur Krol</div>
        <div className="text-stone-400 text-lg leading-none">Ruby on Rails Developer</div>
      </div>
    </div>

    <h2 id="ABOUT" className="font-medium text-lg">ABOUT</h2>
    <div className="text-stone-400 text-justify">
      Hello, I am Artur and I build the web things.
      I specialize in building websites and
      web applications. I am currently working at Calligo but I
      also work as a freelancer helping others solve their problems. Let me know
      if you need any help.
    </div>

    <div className="duration-300 hover:bg-stone-300 hover:text-stone-900 border border-stone-300 text-stone-300 mt-6 rounded-sm cursor-pointer inline-flex p-2 mt-4">
      <Icon className="!text-2xl !leading-none mr-2" icon="handshake" />
      Book a meeting
    </div>
  </div>
)

export default About
