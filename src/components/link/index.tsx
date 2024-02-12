import React from "react"
import { Size } from "../../types"

type Props = {
  brightness?: Size
  className?: string
  href: string
  render?: boolean
  size?: Size
  text: string
  weight?: Size
}

const Link = ({
  brightness = "md",
  className = "",
  href,
  render = true,
  size = "md",
  text,
  weight = "md"
}: Props) => {
  if (!render) return null

  return (
    <a
      href={href}
      className={`
        link
        link--${size}
        brightness-${brightness}
        weight-${weight}
        ${className}
      `}
    >
      {text}
    </a>
  )
}

export default Link
