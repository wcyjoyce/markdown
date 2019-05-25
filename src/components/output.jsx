import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import Subheader from "./subheader.jsx";

class Output extends Component {
  render() {
    return (
      <div className="half">
        <Subheader title="preview" />
        <div className="output content">
          <ReactMarkdown source={this.props.content} />
        </div>
      </div>
    );
  };
};

export default Output;
