import React, { Component } from "react";
import Content from "./content";

class Contents extends Component {
  render() {
    return (
      <ul>
        {this.props.contents.map((content) => (
          <Content key={content.id} content={content} />
        ))}
      </ul>
    );
  }
}

export default Contents;
