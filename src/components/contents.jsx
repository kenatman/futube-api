import React, { Component } from "react";
import axios from "axios";
import Content from "./content";
import "./contents.css";

class Contents extends Component {
  render() {
    return (
      <>
        <ul className="contents-ul">
          {this.props.contents.map((content) => (
            <Content
              key={content.id.videoId ? content.id.videoId : content.id}
              content={content}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Contents;
