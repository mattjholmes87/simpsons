import React, { Component } from "react";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="spinnerBox">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loading;
