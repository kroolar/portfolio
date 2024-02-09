import React from "react"
import { Icon, Link, Section } from "../../components"

const CONTACTS = [
  {
    icon: "alternate_email",
    title: "Email",
    text: "kroolar@gmail.com",
    href: "mailto:kroolar@gmail.com"
  },
  {
    icon: "article",
    title: "Medium",
    text: "@kroolar",
    href: "https://medium.com/@kroolar"
  },
  {
    icon: "folder",
    title: "Github",
    text: "kroolar",
    href: "https://github.com/kroolar"
  },
]

const Contact = () => (
  <Section title="CONTACT">
    {CONTACTS.map(({ icon, title, text, href}) => (
      <div key={title} className="flex mb-2">
        <Icon className="h-10 w-10 text-stone-300 rounded-sm border-0 border-stone-300 flex items-center justify-center !text-4xl" icon={icon} />
        <div className="ml-3 leading-none flex-col justify-center mt-1">
          <div className="font-medium">{title}</div>
          <Link className="text-stone-400" href={href} text={text} />
        </div>
      </div>
    ))}
  </Section>
)

export default Contact
