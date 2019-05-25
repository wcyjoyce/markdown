import React, { Component } from "react";

import Subheader from "./subheader.jsx";

class Input extends Component {
  render() {
    return (
      <div className="half">
        <Subheader title="markdown" />
        <textarea className="input content" onSubmit={(event) => event.preventDefault()}
          type="text"
          placeholder="Type something here"
          value={this.props.content}
          onChange={this.props.handleChange}
        />
      </div>
    );
  };
};

export default Input;
