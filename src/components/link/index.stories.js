import Component from "./"

export default {
  title: "Link",
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
    text: "Link to",
  },
}
