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
        <Contents contents={this.state.videos} />
      </>
    );
  }
}

export default App;
