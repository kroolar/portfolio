import React from "react"
import { Size } from "../../types"

type Props = {
  className?: string
  render?: boolean
  size?: Size
}

const Avatar = ({
  className = "",
  render = true,
  size = "md"
}: Props) => {
  if (!render) return null

  return (
    <img
      className={`avatar avatar--${size} ${className}`}
      src="avatar.png"
    />
  )
}

export default Avatar
