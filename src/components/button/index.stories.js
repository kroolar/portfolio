import Component from "./"

const meta = {
  title: "Button",
  component: Component,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    }
  }
}

export default meta

export const Primary = {
  args: {
    className: "",
    href: "",
    render: true,
    size: "md",
    text: "Button"
  }
}
