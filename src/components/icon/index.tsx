import React from "react"
import { Size } from "../../types"

type Props = {
  brightness?: Size
  className?: string
  icon: string
  render?: boolean
  size?: Size
  type?: "outlined" | "sharp"
  weight?: Size
}

const Icon = ({
  brightness = "md",
  className = "",
  icon = "help_center",
  render = true,
  size = "md",
  type = "outlined",
  weight = "md"
}: Props) => {
  if (!render) return

  return (
    <i className={`
      icon
      icon--${size}
      brightness-${brightness}
      weight-${weight}
      material-icons-${type}
      ${className}
    `}>
      {icon}
    </i>
  )
}

export default Icon
