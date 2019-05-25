import React, { Component } from "react";

import Header from "./header.jsx";
import Input from "./input.jsx";
import Output from "./output.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app">
          <Input />
          <Output />
        </div>
      </div>
    );
  };
};

export default App;
