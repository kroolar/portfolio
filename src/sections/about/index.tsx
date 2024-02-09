import React from "react"
import { Avatar, Button, Icon, Section, Text } from "../../components"

const About = () => (
  <div>
    <div className="text-white flex items-center mb-10">
      <Avatar />

      <div>
        <div className="text-3xl font-semibold text-stone-300">Artur Krol</div>
        <div className="text-stone-400 text-lg leading-none">Ruby on Rails Developer</div>
      </div>
    </div>

    <Section title="ABOUT">
      <div className="text-stone-400 text-justify">
        Hello, I am Artur and I build the web things.
        I specialize in building websites and
        web applications. I am currently working at Calligo but I
        also work as a freelancer helping others solve their problems. Let me know
        if you need any help.
      </div>

      <Button href="mailto:kroolar@gmail.com">
        <Icon className="!text-2xl !leading-none mr-2" icon="handshake" />
        <Text text="Say Hello!" />
      </Button>
    </Section>
  </div>
)

export default About
