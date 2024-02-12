import React from "react"
import { Size } from "../../types"

type Props = {
  align?: "start" | "center" | "end" | "justify"
  brightness?: Size
  children?: string
  className?: string
  id?: string
  render?: boolean
  text?: string
  size?: Size
  weight?: Size
}

const Text = ({
  align = "start",
  brightness = "md",
  children,
  className = "",
  id,
  render = true,
  size = "md",
  text,
  weight = "md",
}: Props) => {
  if (!render) return null

  return (
    <p
      className={`
        text
        text-${align}
        text--${size}
        brightness-${brightness}
        weight-${weight}
        ${className}
      `}
      id={id}
    >
      {text || children}
    </p>
  )
}

export default Text

