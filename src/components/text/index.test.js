import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  const { container } = render(<Component render={false} />)
  const component = container.querySelector(".text")

  expect(component).toBeNull()
})

test("it should render component", () => {
  const { container } = render(<Component />)
  const component = container.querySelector(".text")

  expect(component).toBeDefined()
  expect(component).toHaveClass("text")
  expect(component).toHaveClass("text-start")
  expect(component).toHaveClass("text--md")
  expect(component).toHaveClass("brightness-md")
  expect(component).toHaveClass("weight-md")
})

test("it should change component brightness", () => {
  const { container } = render(<Component brightness="xs"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveClass("brightness-xs")
})

test("it should display child component", () => {
  const { container } = render(<Component>Test Text</Component>)
  const component = container.querySelector(".text")

  expect(component).toHaveTextContent("Test Text")
})

test("it should add class to the component", () => {
  const { container } = render(<Component className="bg-black"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveClass("bg-black")
})

test("it should have an id attribute", () => {
  const { container } = render(<Component id="1"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveAttribute("id", "1")
})

test("it should change size", () => {
  const { container } = render(<Component size="xs"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveClass("text--xs")
})

test("it should contain text", () => {
  const { container } = render(<Component text="Test Text"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveTextContent("Test Text")
})

test("it should change weight", () => {
  const { container } = render(<Component weight="xs"/>)
  const component = container.querySelector(".text")

  expect(component).toHaveClass("weight-xs")
})
