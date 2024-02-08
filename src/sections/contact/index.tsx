import React from "react"
import { Icon } from "../../components"

const Contact = () => (
  <div>
    <h2 className="font-medium mt-16 mb-4">CONTACT</h2>
      
    <div className="flex">
      <Icon className="h-10 w-10 text-stone-300 rounded-sm border-0 border-stone-300 flex items-center justify-center !text-4xl" icon="article" />
      <div className="ml-3 leading-none flex-col justify-center mt-1">
        <div className="font-medium">Medium</div>
        <div className="text-stone-400">https://medium.com/@kroolar</div>
      </div>
    </div>

    <div className="flex mt-4">
      <Icon className="h-10 w-10 text-stone-300 rounded-sm border-0 border-stone-300 flex items-center justify-center !text-4xl" icon="mail" />
      <div className="ml-3 leading-none flex-col justify-center mt-1">
        <div className="font-medium">Email</div>
        <div className="text-stone-400">kroolar@gmail.com</div>
      </div>
    </div>
  </div>
)

export default Contact
