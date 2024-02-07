import React, { Component } from "react";
import Character from "./Character";

class Map extends Component {
  state = {};
  render() {
    return this.props.character.map((item) => {
      return <Character {...item} onDeleteItem={this.props.onDeleteItem} />;
    });
  }
}

export default Map;
