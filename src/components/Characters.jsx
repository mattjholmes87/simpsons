import React, { Component } from "react";
import Character from "./Character";
import Loading from "./Loading";
import Error from "./Error";

class Characters extends Component {
  state = {};
  render() {
    const { characters, onDeleteItem, toggle, liked } = this.props;

    if (!characters) {
      return <Loading />;
    }

    if (!characters.length) return <Error />;

    return characters.map((item) => {
      return (
        <div key={item.id}>
          <Character {...item} onDeleteItem={onDeleteItem} toggle={toggle} />
        </div>
      );
    });
  }
}

export default Characters;
