import React from "react"
import { Box, Icon, Link, Section, Text } from "../../components"

const EXPERIENCE = [
  {
    icon: "cloud",
    company: "Calligo",
    link: "https://www.calligo.io/",
    dates: "2020 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: `Developing existing and creating new internal systems that
      improve company processes.`
  },
  {
    icon: "add_reaction",
    company: "Vybbe",
    link: "https://www.vybbe.com/",
    dates: "2019 - 2020",
    title: "Full Stack RoR Developer",
    description: `Working in a small team in the startup where we built and
      implemented an internal product from scratch.`
  },
  {
    icon: "explore",
    company: "Freelancer",
    link: "/",
    dates: "2018 - Present",
    title: "Full Stack Ruby on Rails Developer",
    description: `Creating websites, maintenance hosting and domains, building
      online stores, blogs, CMSs, APIs, scripts and many more...`
  }
]

const Experience = () => (
  <Section className="mb-20" title="EXPERIENCE">
    {EXPERIENCE.map(({ icon, company, link, dates, title, description }) => (
      <Box className="flex flex-col mb-10 sm:flex-row" key={title}>
        <Box className="flex leading-none sm:w-1/2">
          <Icon className="mr-4 text-4xl text-stone-300" icon={icon} />

          <Box className="mb-4 mt-1">
            <Link href={link} text={company} />

            <Text brightness="sm" className="mt-px" text={dates} />
          </Box>
        </Box>

        <Box className="sm:w-2/3">
          <Text text={title} />

          <Text
            align="justify"
            brightness="sm"
            text={description}
            weight="sm"
          />
        </Box>
      </Box>
    ))}
  </Section>
)

export default Experience
