import React from "react"
import { Icon, Link, Section } from "../../components"

const Contact = () => (
  <Section title="CONTACT">
    <div className="flex">
      <Icon className="h-10 w-10 text-stone-300 rounded-sm border-0 border-stone-300 flex items-center justify-center !text-4xl" icon="article" />
      <div className="ml-3 leading-none flex-col justify-center mt-1">
        <div className="font-medium">Medium</div>
        <Link className="text-stone-400" href="https://medium.com/@kroolar" text="@kroolar" />
      </div>
    </div>

    <div className="flex mt-4">
      <Icon className="h-10 w-10 text-stone-300 rounded-sm border-0 border-stone-300 flex items-center justify-center !text-4xl" icon="mail" />
      <div className="ml-3 leading-none flex-col justify-center mt-1">
        <div className="font-medium">Email</div>

        <Link
          className="text-stone-400"
          href="mailto:kroolar@gmail.com"
          text="kroolar@gmail.com"
        />
      </div>
    </div>
  </Section>
)

export default Contact
