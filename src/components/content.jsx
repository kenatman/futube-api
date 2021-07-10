import React, { Component } from "react";

class Content extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      channelTitle,
      thumbnails: {
        default: { url },
      },
    } = this.props.content.snippet;
    console.log(url);
    return (
      <li>
        <img alt="thumbnail" src={url} />
        <h3>{title}</h3>
        <h4>{channelTitle}</h4>
        <h5>
          {new Date(publishedAt).toLocaleString("ko-kr", { timeZone: "UTC" })}
        </h5>
      </li>
    );
  }
}

export default Content;
