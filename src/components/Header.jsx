import React from "react";
import title from "./images/simpsonstitle.svg";

const Header = () => {
  return (
    <>
      <div className="titleBox">
        <img className="titlePicture" src={title} alt="Character" />
      </div>
    </>
  );
};

export default Header;
