import React from "react"
import { Box, Text } from "../"

type Props = {
  title: string
  className?: string
  children: any // eslint-disable-line
}

const Section = ({
  title,
  className = "",
  children
}: Props) => (
  <Box className={`section ${className}`}>
    <Text
      className="section__text mb-2"
      id={title}
      text={title}
      size="lg"
    />

    {children}
  </Box>
)

export default Section
