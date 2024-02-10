import Component from "./"

export default {
  title: "Tag",
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
    clasName: "",
    render: true,
    size: "md",
    text: "Tag"
  },
}
