import React from "react"
import { Size } from "../../types"

type Props = {
  className?: string
  href: string
  render?: boolean
  size?: Size
  text: string
}

const Link = ({
  className = "",
  href,
  render = true,
  size = "md",
  text
}: Props) => {
  if (!render) return null

  return (
    <a
      href={href}
      className={`link link--${size} ${className}`}
    >
      {text}
    </a>
  )
}

export default Link
