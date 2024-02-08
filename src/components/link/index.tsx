import React from "react"

type Props = {
  href: string
  text: string
}

const Link = ({
  href,
  text
}: Props) => (
  <a
    href={href}
    className="inline-flex duration-200 hover:text-rose-500 border-b border-rose-500 border-opacity-0 hover:border-opacity-100 text-stone-300"
  >
    {text}
  </a>
)

export default Link
