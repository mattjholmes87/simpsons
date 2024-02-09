import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="navBox">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "#70d1fe" }}>
              All Characters
            </Link>
          </div>
          <div>
            <Link
              to="/simpson"
              style={{ textDecoration: "none", color: "#70d1fe" }}
            >
              Simpson Family
            </Link>
          </div>
          <div>
            <Link
              to="/wiggum"
              style={{ textDecoration: "none", color: "#70d1fe" }}
            >
              Wiggum Family
            </Link>
          </div>
          <div>
            <Link
              to="/milhouse"
              style={{ textDecoration: "none", color: "#70d1fe" }}
            >
              Milhouse Van Houten
            </Link>
          </div>
          <div>
            <Link
              to="/nick"
              style={{ textDecoration: "none", color: "#70d1fe" }}
            >
              Dr Nick
            </Link>
          </div>
          <div>
            <Link
              to="/duffman"
              style={{ textDecoration: "none", color: "#70d1fe" }}
            >
              Duffman
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
