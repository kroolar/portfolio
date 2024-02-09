import React from "react"
import { Text } from "../"

type Props = {
  title: string
  clasName?: string
  children: any // eslint-disable-line
}

const Section = ({
  title,
  clasName,
  children
}: Props) => (
  <section className={`mb-16 ${clasName}`}>
    <Text className="mb-2" id={title} text={title} size="lg" />

    {children}
  </section>
)

export default Section
