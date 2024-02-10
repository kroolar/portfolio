import React from "react"
import { Section, Tag } from "../../components"

const SKILLS = [
  "HTML", "CSS", "SASS", "TailwindCSS", "React", "Ruby",
  "Responsive Design", "Ruby on Rails", "Docker", "Git", "Nginx",
  "Linux", "Azure DevOps"
]

const Skills = () => (
  <Section title="SKILLS">
    {SKILLS.map(skill => (
      <Tag
        className="mr-3 mb-3"
        key={skill}
        text={skill}
      />
    ))}
  </Section>
)

export default Skills
