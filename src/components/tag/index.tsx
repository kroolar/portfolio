import React from "react"
import { Size } from "../../types"

type Props = {
  brightness?: Size
  className?: string
  render?: boolean
  size?: Size
  text: string
  weight?: Size
}

const Tag = ({
  brightness = "md",
  className = "",
  render = true,
  size = "md",
  text,
  weight = "md"
}: Props) => {
  if (!render) return null

  return (
    <div
      className={`
        tag
        tag--${size}
        brightness-${brightness}
        weight-${weight}
        ${className}
      `}
    >
      {text}
    </div>
  )
}

export default Tag
