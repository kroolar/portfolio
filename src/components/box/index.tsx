import React from "react"

type Props = {
  children?: any // eslint-disable-line
  className?: string
  render?: boolean
}
const Box = ({
  children,
  className = "",
  render = true
}: Props) => {
  if (!render) return null

  return (
    <div className={`box ${className}`}>
      {children}
    </div>
  )
}

export default Box
