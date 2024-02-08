import React from "react"

type Props = {
  text: string
}

const Tag = ({
  text
}: Props) => (
  <div className="border border-stone-400 text-stone-400 inline-flex p-2 leading-none mr-3 rounded-sm mb-3">
    {text}
  </div>
)

export default Tag
