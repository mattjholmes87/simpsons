import React, { Component } from "react";

class Character extends Component {
  state = {};
  render() {
    const { character, characterDirection, image, quote, onDeleteItem } =
      this.props;
    return (
      <div key={image}>
        <h1>{character}</h1>
        <p>{quote}</p>
        <img src={image} tag={characterDirection} alt={character} />
        <button onClick={() => onDeleteItem(quote)}>Delete</button>
      </div>
    );
  }
}

export default Character;
