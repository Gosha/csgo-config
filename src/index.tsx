import React, { Component } from "react"
import { render } from "react-dom"
import Editor from "./Editor"

class App extends Component {
  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
