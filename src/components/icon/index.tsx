import React from "react"

type Props = {
  className: string
  icon: string
  render?: boolean
  type?: string
}

const Icon = ({
  className = "",
  icon = "help_center",
  render = true,
  type = "outlined"
}: Props) => {
  if (!render) return

  return (
    <i className={`icon ${className} material-icons-${type}`}>
      {icon}
    </i>
  )
}

export default Icon
