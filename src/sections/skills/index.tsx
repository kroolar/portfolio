import React from "react"
import { Tag } from "../../components"

const SKILLS = [
  "HTML", "CSS", "SASS", "TailwindCSS", "React", "Responsive Design", "Ruby",
  "Ruby on Rails", "Docker", "Git", "Wordpress", "Shopify", "Linux",
  "Azure DevOps"
]

const Skills = () => (
  <div>
    <h2 className="font-medium mt-16 mb-4">SKILLS</h2>

    {SKILLS.map(skill => <Tag key={skill} text={skill} />)}
  </div>
)

export default Skills
