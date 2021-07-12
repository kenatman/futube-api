import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./app.css";
import Contents from "./components/contents";
import Detail from "./components/detail";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Contents} />
        <Route path="/video/:id" component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
