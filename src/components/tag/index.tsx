import React from "react"
import { Size } from "../../types"

type Props = {
  className?: string
  render?: boolean
  size?: Size
  text: string
}

const Tag = ({
  className = "",
  render = true,
  size = "md",
  text
}: Props) => {
  if (!render) return null

  return (
    <div className={`tag tag--${size} ${className}`}>
      {text}
    </div>
  )
}

export default Tag
