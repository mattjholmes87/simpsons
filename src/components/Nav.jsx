import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="navBox">
          <div>
            <Link
              onClick={() => this.props.getCharacters("")}
              to="/"
              className="link"
            >
              All Characters
            </Link>
          </div>
          <div>
            <Link
              onClick={() => this.props.getCharacters("simpson")}
              to="/simpson"
              className="link"
            >
              Simpson Family
            </Link>
          </div>
          <div>
            <Link
              onClick={() => this.props.getCharacters("wiggum")}
              to="/wiggum"
              className="link"
            >
              Wiggum Family
            </Link>
          </div>
          <div>
            <Link
              onClick={() => this.props.getCharacters("milhouse")}
              to="/milhouse"
              className="link"
            >
              Milhouse Van Houten
            </Link>
          </div>
          <div>
            <Link
              onClick={() => this.props.getCharacters("nick")}
              to="/nick"
              className="link"
            >
              Dr Nick
            </Link>
          </div>
          <div>
            <Link
              onClick={() => this.props.getCharacters("duffman")}
              to="/duffman"
              className="link"
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
