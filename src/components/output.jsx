import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import emoji from "emoji-dictionary";

import Subheader from "./subheader.jsx";

class Output extends Component {
  render() {
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

    return (
      <div className="half">
        <Subheader title="preview" />
        <div className="output content">
          <ReactMarkdown source={this.props.content} renderers={{ text: emojiSupport }} />
        </div>
      </div>
    );
  };
};

export default Output;
