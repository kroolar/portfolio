import Component from "./"

export default {
  title: "Tag",
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
    clasName: "",
    render: true,
    size: "md",
    text: "Tag",
    weight: "md"
  }
}
