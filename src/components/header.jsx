import React, { Component } from "react";

class Header extends Component {
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.inputRef.current.value);
  };
  render() {
    return (
      <nav>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            placeholder="Search by keywords..."
          ></input>
          <button>Search</button>
        </form>
      </nav>
    );
  }
}

export default Header;
