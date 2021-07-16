import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./app.css";
import Contents from "./components/contents";
import Detail from "./components/detail";
import axios from "axios";
import Header from "./components/header";

class App extends Component {
  state = { videos: [] };

  getVideos = async () => {
    const {
      data: { items },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
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
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${term}&key=${process.env.REACT_APP_API_KEY}`
    );

    this.setState({ videos: items });
  };

  render() {
    return (
      <HashRouter>
        <Header onSearch={this.handleSearch} />
        <Route path="/" exact={true}>
          <Contents contents={this.state.videos} />
        </Route>
        <Route path="/video/:id" component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
