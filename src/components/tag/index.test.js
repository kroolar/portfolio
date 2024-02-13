import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  const { container } = render(<Component render={false} />)
  const component = container.querySelector(".tag")

  expect(component).toBeNull()
})

test("it should render component", () => {
  const { container } = render(<Component />)
  const component = container.querySelector(".tag")

  expect(component).toBeDefined()
  expect(component).toHaveClass("tag")
  expect(component).toHaveClass("tag--md")
  expect(component).toHaveClass("brightness-md")
  expect(component).toHaveClass("weight-md")
})

test("it should change component brightness", () => {
  const { container } = render(<Component brightness="xs"/>)
  const component = container.querySelector(".tag")

  expect(component).toHaveClass("brightness-xs")
})

test("it should add class to the component", () => {
  const { container } = render(<Component className="bg-black"/>)
  const component = container.querySelector(".tag")

  expect(component).toHaveClass("bg-black")
})

test("it should change size", () => {
  const { container } = render(<Component size="xs"/>)
  const component = container.querySelector(".tag")

  expect(component).toHaveClass("tag--xs")
})

test("it should contain text", () => {
  const { container } = render(<Component text="Test Tag"/>)
  const component = container.querySelector(".tag")

  expect(component).toHaveTextContent("Test Tag")
})

test("it should change weight", () => {
  const { container } = render(<Component weight="xs"/>)
  const component = container.querySelector(".tag")

  expect(component).toHaveClass("weight-xs")
})
