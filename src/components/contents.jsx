import React, { Component } from "react";
import axios from "axios";
import Content from "./content";
import "./contents.css";
import Header from "./header";
class Contents extends Component {
  state = { videos: [] };

  getVideos = async () => {
    const {
      data: { items },
    } = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDY0VSFooCB3BuL6bFSl78SqZbcdjZoAM"
    );

    this.setState({ videos: items });
  };

  componentDidMount() {
    this.getVideos();
  }

  handleSearch = async (term) => {
    const {
      data: { items },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${term}&key=AIzaSyBDY0VSFooCB3BuL6bFSl78SqZbcdjZoAM`
    );

    this.setState({ videos: items });
  };
  render() {
    return (
      <>
        <Header onSearch={this.handleSearch} />
        <ul className="contents-ul">
          {this.state.videos.map((content) => (
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
