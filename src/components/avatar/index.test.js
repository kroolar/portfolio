import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  render(<Component render={false} />)

  expect(() => screen.getByRole("img")).toThrow()
})

test("it should render component", () => {
  render(<Component />)
  const component = screen.getByRole("img")

  expect(component).toHaveClass("avatar avatar--md")
  expect(component).toHaveAttribute("src", "avatar.png")
})

test("it should change component size class", () => {
  render(<Component size="xl" />)
  const component = screen.getByRole("img")

  expect(component).toHaveClass("avatar avatar--xl")
})
