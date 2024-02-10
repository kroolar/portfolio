import Component from "./"

const meta = {
  title: "Icon",
  component: Component,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    },
    type: {
      options: ["outlined", "sharp"],
      control: { type: "inline-radio" }
    }
  }
}

export default meta

export const Primary = {
  args: {
    className: "",
    icon: "check",
    render: true,
    size: "md",
    type: "outlined"
  },
}
