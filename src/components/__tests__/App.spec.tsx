import { render } from "@testing-library/react"
import "jest"
import * as React from "react"

import App from "../App"

describe("App component", () => {
  it("renders correctly with red background", () => {
    const { container } = render(<App color="red" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with blue background", () => {
    const { container } = render(<App color="blue" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
