import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  render(<Component render={false} />)

  expect(() => screen.getByRole("div")).toThrow()
})

test("it should render component", () => {
  const { container } = render(<Component/>)
  const component = container.querySelector(".box")

  expect(component).toBeDefined()
  expect(component).toHaveClass("box")
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
  const component = container.querySelector(".box")

  expect(component).toHaveClass("box bg-black")
})
