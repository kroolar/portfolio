import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Component from "./"

test("it should render component", () => {
  const { container } = render(<Component />)
  const component = container.querySelector(".section")

  expect(component).toBeDefined()
  expect(component).toHaveClass('section')
})

test("it should add class to the component", () => {
  const { container } = render(<Component className="bg-black"/>)
  const component = container.querySelector(".section")

  expect(component).toHaveClass("bg-black")
})

test("it should contain title", () => {
  const { container } = render(<Component title="Section Title"/>)
  const component = container.querySelector("p")

  expect(component).toHaveTextContent('Section Title')
})

test("it should display child component", () => {
  const { container } = render(
    <Component>
      <div className="section__child">Test</div>
    </Component>
  )

  const component = container.querySelector(".section")

  expect(component).toBeDefined()
  expect(component).toHaveTextContent("Test")
})
