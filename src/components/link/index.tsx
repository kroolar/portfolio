import React from "react"

type Props = {
  className?: string
  href: string
  text: string
}

const Link = ({
  className,
  href,
  text
}: Props) => (
  <a
    href={href}
    className={`inline-flex duration-200 hover:text-rose-500 border-b border-rose-500 border-opacity-0 hover:border-opacity-100 text-stone-300 ${className}`}
  >
    {text}
  </a>
)

export default Link
