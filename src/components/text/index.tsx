import React from "react"

type Props = {
  id?: string
  className?: string
  text: string
  size?: string
}

const Text = ({
  id,
  className,
  text,
  size
}: Props) => (
  <p id={id} className={`font-medium text-${size} ${className}`}>
    {text}
  </p>
)

export default Text

