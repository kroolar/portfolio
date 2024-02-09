import React from "react"
import { Section, Tag } from "../../components"

const SKILLS = [
  "HTML", "CSS", "SASS", "TailwindCSS", "React", "Responsive Design", "Ruby",
  "Ruby on Rails", "Docker", "Git", "Nginx", "Linux",
  "Azure DevOps"
]

const Skills = () => (
  <Section title="SKILLS">
    {SKILLS.map(skill => <Tag key={skill} text={skill} />)}
  </Section>
)

export default Skills
