import * as React from "react"

interface AppProps {
  color: "red" | "blue"
}

export default class App extends React.PureComponent<AppProps> {
  render() {
    return (
      <h1 style={{ backgroundColor: this.props.color }}>
        Welcome!
      </h1>
    )
  }
}
