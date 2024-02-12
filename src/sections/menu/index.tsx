import React from "react"
import { Box, Link } from "../../components"

const MENU_ITEMS = [
  "ABOUT",
  "EXPERIENCE",
  "SKILLS",
  "CONTACT"
]

const Menu = () => (
  <Box className="flex justify-around mb-20 sm:mb-32">
    {MENU_ITEMS.map(item => (
      <Link
        brightness="xs"
        key={item}
        href={`#${item}`}
        text={item}
      />
    ))}
  </Box>
)

export default Menu
