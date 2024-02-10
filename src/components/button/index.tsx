import React from "react"
import { Size } from "../../types"

type Props = {
  children?: any // eslint-disable-line
  className?: string
  href?: string
  render?: boolean
  size?: Size
  text?: string
}

const Button = ({
  children,
  className = "",
  href,
  render = true,
  size = "md",
  text
}: Props) => {
  if (!render) return null

  return (
    <a
      className={`button button--${size} ${className}`}
      href={href}
    >
      {text || children}
    </a>
  )
}

export default Button

