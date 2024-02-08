import React from "react"
import { Icon, Link } from "../../components"

const EXPERIENCE = [
  {
    icon: "cloud",
    company: "Calligo",
    link: "https://www.calligo.io/",
    dates: "2020 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: "Development and maintenance of an ."
  },
  {
    icon: "add_reaction",
    company: "Vybbe",
    link: "https://www.vybbe.com/",
    dates: "2019 - 2020",
    title: "Full Stack Ruby on Rails Developer",
    description: "Development and ."
  },
  {
    icon: "explore",
    company: "Freelancer",
    link: "/",
    dates: "2018 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: "Development and maintenance of an internal product for managing processes in the company."
  }
]

const Experience = () => (
  <div>
    <h2 className="font-medium mt-16 mb-4 text-lg">EXPERIENCE</h2>

    {EXPERIENCE.map(({ icon, company, link, dates, title, description }) => (
      <div key={title} className="flex flex-col mb-10">
        <div className="flex leading-none">
          <Icon className="mr-4 text-4xl" icon={icon} />

          <div className="mb-4 mt-1">
            <Link href={link} text={company} />

            <div className="text-stone-400">{dates}</div>
          </div>
        </div>

        <div className="text-stone-300">
          <div>
            {title}
          </div>

          
          <div className="text-stone-400 font-light w-full">
            {description}
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Experience
