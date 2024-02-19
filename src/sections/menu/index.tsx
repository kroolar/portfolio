import React from "react"
import { Box, Link } from "../../components"

const MENU_ITEMS = [
  "ABOUT",
  "EXPERIENCE",
  "SKILLS",
  "CONTACT"
]

const Menu = () => (
  <Box className="menu flex justify-around mb-20 sm:mb-32">
    {MENU_ITEMS.map(item => (
      <Link
        brightness="xs"
        className={`menu__item menu__item--${item}`}
        key={item}
        href={`#${item}`}
        text={item}
      />
    ))}
  </Box>
)

export default Menu
