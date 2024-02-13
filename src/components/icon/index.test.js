import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Component from "./"

test("it should not render component", () => {
  const { container } = render(<Component render={false} />)
  const component = container.querySelector(".icon")

  expect(component).toBeNull()
})

test("it should render component", () => {
  const { container } = render(<Component />)
  const component = container.querySelector(".icon")

  expect(component).toBeDefined()
  expect(component).toHaveClass('icon')
  expect(component).toHaveClass("icon--md")
  expect(component).toHaveClass('brightness-md')
  expect(component).toHaveClass("weight-md")
  expect(component).toHaveClass("material-icons-outlined")
  expect(component).toHaveTextContent("help_center")
})

test("it should change component brightness", () => {
  const { container } = render(<Component brightness="xs"/>)
  const component = container.querySelector(".icon")

  expect(component).toHaveClass('brightness-xs')
})

test("it should add class to the component", () => {
  const { container } = render(<Component className="bg-black"/>)
  const component = container.querySelector(".icon")

  expect(component).toHaveClass("bg-black")
})

test("it should change icon", () => {
  const { container } = render(<Component icon="dashboard" />)
  const component = container.querySelector(".icon")

  expect(component).toHaveTextContent("dashboard")
})

test("it should change size", () => {
  const { container } = render(<Component size="xs"/>)
  const component = container.querySelector(".icon")

  expect(component).toHaveClass("icon--xs")
})

test("it should change type", () => {
  const { container } = render(<Component type="sharp" />)
  const component = container.querySelector(".icon")

  expect(component).toHaveClass("material-icons-sharp")
})

test("it should change weight", () => {
  const { container } = render(<Component weight="xs"/>)
  const component = container.querySelector(".icon")

  expect(component).toHaveClass("weight-xs")
})
