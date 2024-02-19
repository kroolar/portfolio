import React from "react"
import { Avatar, Box, Button, Icon, Section, Text } from "../../components"

const About = () => (
  <Box className="about">
    <Box className="flex flex-row items-center mb-10">
      <Avatar className="mr-6" />

      <Box>
        <Text className="about__name !text-3xl" size="xl" weight="lg">
          ARTUR KROL
        </Text>

        <Text brightness="sm" className="about__title leading-none" size="lg">
          RUBY ON RAILS DEVELOPER
        </Text>
      </Box>
    </Box>

    <Section className="about__section" title="ABOUT">
      <Text align="justify" brightness="sm" className="about__description mb-6" weight="sm">
        Hello, I am Artur and I build the web things. I specialize in building
        websites and web applications. I currently work at Calligo but I also
        work as a freelancer helping others solve their problems. Let me know if
        you need any help.
      </Text>

      <Button className="about__button mb-20" href="mailto:kroolar@gmail.com">
        <Icon className="about__button-icon mr-2" icon="handshake" size="xs" />
        <Text className="about__button-text" text="Say Hello" />
      </Button>
    </Section>
  </Box>
)

export default About
