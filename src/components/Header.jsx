import React, { Component } from "react";
import title from "./images/simpsonstitle.svg";

class Header extends Component {
  render() {
    return (
      <>
        <div className="titleBox">
          <img className="titlePicture" src={title} alt="Character" />
        </div>
      </>
    );
  }
}

export default Header;
