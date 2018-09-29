import { shallow } from "enzyme"
import "jest"
import * as React from "react"

import App from "../App"

describe("App component", () => {
  it("renders correctly with red background", () => {
    const component = shallow(<App color="red" />)
    expect(component).toMatchSnapshot()
  })

  it("renders correctly with blue background", () => {
    const component = shallow(<App color="blue" />)
    expect(component).toMatchSnapshot()
  })
})
