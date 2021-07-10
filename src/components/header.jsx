import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <form>
          <input type="text" placeholder="Search by keywords..."></input>
          <button>Search</button>
        </form>
      </nav>
    );
  }
}

export default Header;
