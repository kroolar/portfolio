import Component from "./"

export default {
  title: "Text",
  component: Component,
  argTypes: {
    align: {
      options: ["start", "center", "end", "justify"],
      control: { type: "inline-radio" }
    },
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
    align: "start",
    brightness: "md",
    className: "",
    id: "",
    render: true,
    text: "Hello World!",
    size: "md",
    weight: "md"
  }
}
