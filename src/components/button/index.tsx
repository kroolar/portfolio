import React from "react"
import { Size } from "../../types"

type Props = {
  brightness?: Size
  children?: any // eslint-disable-line
  className?: string
  href?: string
  render?: boolean
  size?: Size
  text?: string
  weight?: Size
}

const Button = ({
  brightness = "md",
  children,
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
      className={`
        button
        button--${size}
        brightness-${brightness}
        weight-${weight}
        ${className}
      `}
      href={href}
    >
      {text || children}
    </a>
  )
}

export default Button

