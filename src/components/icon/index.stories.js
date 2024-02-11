import Component from "./"

export default {
  title: "Icon",
  component: Component,
  argTypes: {
    brightness: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    },
    type: {
      options: ["outlined", "sharp"],
      control: { type: "inline-radio" }
    },
    weight: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    },
  }
}

export const Primary = {
  args: {
    brightness: "md",
    className: "",
    icon: "check",
    render: true,
    size: "md",
    type: "outlined",
    weight: "md"
  },
}
