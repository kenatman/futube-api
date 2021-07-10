import React, { Component } from "react";
import axios from "axios";
import "./app.css";
import Contents from "./components/contents";
import Header from "./components/header";

class App extends Component {
  state = { videos: [] };

  getVideos = async () => {
    const {
      data: { items },
    } = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDY0VSFooCB3BuL6bFSl78SqZbcdjZoAM"
    );
    console.log(items);
    this.setState({ videos: items });
  };

  componentDidMount() {
    this.getVideos();
  }
  render() {
    return (
      <>
        <Header />
        <Contents contents={this.state.videos} />
      </>
    );
  }
}

export default App;
