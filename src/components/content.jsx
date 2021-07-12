import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./content.css";
class Content extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      channelTitle,
      thumbnails: {
        high: { url },
      },
    } = this.props.content.snippet;
    const { id } = this.props.content;

    return (
      <div className="content-li">
        <Link
          to={{
            pathname: `/video/${id.videoId ? id.videoId : id}`,
            state: {
              title,
              description,
              publishedAt,
              channelTitle,
              id,
            },
          }}
        >
          <img className="content-thumbnail" alt="thumbnail" src={url} />
        </Link>
        <h3 className="content-title">{title}</h3>
        <h4 className="content-creator">Creator : {channelTitle}</h4>
        <h5 className="content-date">
          Created At :
          {new Date(publishedAt).toLocaleString("ko-kr", { timeZone: "UTC" })}
        </h5>
      </div>
    );
  }
}

export default Content;
