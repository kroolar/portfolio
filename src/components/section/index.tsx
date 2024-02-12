import React from "react"
import { Box, Text } from "../"

type Props = {
  title: string
  clasName?: string
  children: any // eslint-disable-line
}

const Section = ({
  title,
  clasName = "",
  children
}: Props) => (
  <Box className={clasName}>
    <Text
      className="mb-2"
      id={title}
      text={title}
      size="lg"
    />

    {children}
  </Box>
)

export default Section
