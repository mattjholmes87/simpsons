import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { getCharacters } = props;

  return (
    <>
      <div className="navBox">
        <div>
          <Link onClick={() => getCharacters("")} to="/" className="link">
            All Characters
          </Link>
        </div>
        <div>
          <Link
            onClick={() => getCharacters("simpson")}
            to="/simpson"
            className="link"
          >
            Simpson Family
          </Link>
        </div>
        <div>
          <Link
            onClick={() => getCharacters("wiggum")}
            to="/wiggum"
            className="link"
          >
            Wiggum Family
          </Link>
        </div>
        <div>
          <Link
            onClick={() => getCharacters("milhouse")}
            to="/milhouse"
            className="link"
          >
            Milhouse Van Houten
          </Link>
        </div>
        <div>
          <Link
            onClick={() => getCharacters("nick")}
            to="/nick"
            className="link"
          >
            Dr Nick
          </Link>
        </div>
        <div>
          <Link
            onClick={() => getCharacters("duffman")}
            to="/duffman"
            className="link"
          >
            Duffman
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
