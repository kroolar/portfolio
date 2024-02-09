import React from "react"

type Props = {
  className?: string
  text?: string
  children?: any // eslint-disable-line
  href?: string
}

const Button = ({
  className,
  text,
  children,
  href
}: Props) => (
  <a
    className={`duration-300 hover:text-rose-500 hover:border-rose-500 border border-stone-300 text-stone-300 mt-6 rounded-sm cursor-pointer inline-flex p-2 ${className}`}
    href={href}
  >
    {text || children}
  </a>
)

export default Button

