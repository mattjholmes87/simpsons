import React, { Component } from "react";
import title from "./images/simpsonstitle.svg";

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <img className="titleBox" src={title} alt="Character" />
        </div>
      </>
    );
  }
}

export default Header;
