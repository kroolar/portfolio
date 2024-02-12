import Component from "./"

export default {
  title: "Link",
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
    weight: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    }
  }
}

export const Primary = {
  args: {
    brightness: "md",
    className: "",
    href: "/",
    render: true,
    size: "md",
    text: "Link to",
    weight: "md"
  }
}

