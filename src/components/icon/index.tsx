import React from "react"
import { Size } from "../../types"

type Props = {
  className: string
  icon: string
  render?: boolean
  size?: Size
  type?: "outlined" | "sharp"
}

const Icon = ({
  className = "",
  icon = "help_center",
  render = true,
  size = "md",
  type = "outlined"
}: Props) => {
  if (!render) return

  return (
    <i className={`icon icon--${size} ${className} material-icons-${type}`}>
      {icon}
    </i>
  )
}

export default Icon
