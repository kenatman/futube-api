import React, { Component } from "react";
import "./header.css";
class Header extends Component {
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.inputRef.current.value);
  };
  render() {
    return (
      <nav>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <a href="/">
            <i className="fab fa-youtube search-logo"></i>
          </a>
          <input
            className="search-input"
            ref={this.inputRef}
            type="text"
            placeholder="Search by keywords..."
          ></input>
          <button className="search-btn">
            <i className="fas fa-search search-icon"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;
