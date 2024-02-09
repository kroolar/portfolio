import React from "react"
import { Icon, Link, Section } from "../../components"

const EXPERIENCE = [
  {
    icon: "cloud",
    company: "Calligo",
    link: "https://www.calligo.io/",
    dates: "2020 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: "Developing existing and creating new internal systems that improve company processes."
  },
  {
    icon: "add_reaction",
    company: "Vybbe",
    link: "https://www.vybbe.com/",
    dates: "2019 - 2020",
    title: "Full Stack RoR Developer",
    description: "Working in a small team in the startup where we built and implemented an internal product from scratch."
  },
  {
    icon: "explore",
    company: "Freelancer",
    link: "/",
    dates: "2018 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: "Creating websites, maintenance hosting and domains, building online stores, blogs, CMSs, APIs, scripts and many more..."
  }
]

const Experience = () => (
  <Section clasName="mt-10" title="EXPERIENCE">
    {EXPERIENCE.map(({ icon, company, link, dates, title, description }) => (
      <div key={title} className="flex flex-col mb-10 sm:flex-row">
        <div className="flex leading-none sm:w-1/2">
          <Icon className="mr-4 text-4xl text-stone-300" icon={icon} />

          <div className="mb-4 mt-1">
            <Link href={link} text={company} />

            <div className="text-stone-400 mt-px">{dates}</div>
          </div>
        </div>

        <div className="text-stone-300 sm:w-2/3">
          <div>
            {title}
          </div>

          <div className="text-stone-400 font-base w-full text-justify">
            {description}
          </div>
        </div>
      </div>
    ))}
  </Section>
)

export default Experience
