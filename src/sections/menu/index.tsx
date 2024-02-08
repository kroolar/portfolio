import React from "react"
import { Link } from "../../components"

const MENU_ITEMS = [
  "ABOUT",
  "EXPERIENCE",
  "SKILLS",
  "CONTACT"
]

const Menu = () => (
  <div className="flex justify-around mb-16">
    {MENU_ITEMS.map(item => (
      <Link
        key={item}
        href={`#${item}`}
        text={item}
      />
    ))}
  </div>
)

export default Menu
