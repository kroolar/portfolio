import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  const { container } = render(<Component render={false} />)
  const component = container.querySelector(".button")

  expect(component).toBeNull()
})

test("it should render component", () => {
  const { container } = render(<Component />)
  const component = container.querySelector(".button")

  expect(component).toBeDefined()
  expect(component).toHaveClass('button')
  expect(component).toHaveClass("button--md")
  expect(component).toHaveClass('brightness-md')
  expect(component).toHaveClass("weight-md")
})

test("it should change component brightness", () => {
  const { container } = render(<Component brightness="xs"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveClass('brightness-xs')
})

test("it should display child component", () => {
  const { container } = render(
    <Component>
      <p>Test</p>
    </Component>
  )

  const child = container.querySelector("p")

  expect(child).toBeDefined()
  expect(child).toHaveTextContent("Test")
})

test("it should add class to the component", () => {
  const { container } = render(<Component className="bg-black"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveClass("bg-black")
})

test("it should have a href attribute", () => {
  const { container } = render(<Component href="localhost"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveAttribute("href", "localhost")
})

test("it should change size", () => {
  const { container } = render(<Component size="xs"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveClass("button--xs")
})

test("it should contain text", () => {
  const { container } = render(<Component text="Test Button"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveTextContent("Test Button")
})

test("it should change weight", () => {
  const { container } = render(<Component weight="xs"/>)
  const component = container.querySelector(".button")

  expect(component).toHaveClass("weight-xs")
})
