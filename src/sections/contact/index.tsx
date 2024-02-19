import React from "react"
import { Box, Icon, Link, Section, Text } from "../../components"

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
  <Section className="contact mb-20" title="CONTACT">
    {CONTACTS.map(({ icon, title, text, href}) => (
      <Box key={title} className={`contact__item--${title} flex items-center mb-3`}>
        <Icon icon={icon} size="sm" />

        <Box className="ml-3 leading-none flex-col justify-center mt-1">
          <Text text={title} weight="lg" />
          <Link brightness="sm" href={href} text={text} />
        </Box>
      </Box>
    ))}
  </Section>
)

export default Contact
