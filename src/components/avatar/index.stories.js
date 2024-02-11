import Component from "./"

export default {
  title: "Avatar",
  component: Component,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" }
    }
  }
}

export const Primary = {
  args: {
    className: "",
    render: true,
    size: "md"
  }
}
