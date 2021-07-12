import React, { Component } from "react";
import Iframe from "react-iframe";
import "./detail.css";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { state } = this.props.location;
    if (state) {
      return (
        <div className="detail-container">
          <Iframe
            className="detail-video"
            //template literals on React components
            url={`http://www.youtube.com/embed/${
              state.id.videoId ? state.id.videoId : state.id
            }`}
          />

          <h2 className="detail-title">{state.title}</h2>
          <h3 className="detail-description">{state.description}</h3>
          <h4 className="detail-creator">Creator : {state.channelTitle}</h4>
          <h5 className="detail-date">
            Created At :
            {new Date(state.publishedAt).toLocaleString("ko-kr", {
              timeZone: "UTC",
            })}
          </h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
