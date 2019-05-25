import React, { Component } from "react";

import Header from "./header.jsx";
import Input from "./input.jsx";
import Output from "./output.jsx";

class App extends Component {
  state = { content: "" };

  updatePreview = (event) => {
    this.setState({ content: event.target.value });
    console.log(this.state.content);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="app">
          <Input content={this.state.content} handleChange={this.updatePreview} />
          <Output content={this.state.content} />
        </div>
      </div>
    );
  };
};

export default App;
