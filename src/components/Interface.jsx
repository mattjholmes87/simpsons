import React, { Component } from "react";
import Character from "./Character";
import Input from "./Input";
import axios from "axios";

class Interface extends Component {
  state = {};

  async componentDidMount() {
    this.getCharacters("");
  }

  getCharacters = async (searchTerm) => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character=${searchTerm}`
    );

    this.setState({ character: data });
  };

  onDeleteItem = (quote) => {
    const character = [...this.state.character];
    const index = character.findIndex((item) => item.quote === quote);
    character.splice(index, 1);
    this.setState({ character });
  };

  onSearchInput = (e) => {
    this.getCharacters(e.target.value);
  };

  render() {
    console.log(this.state);
    return <Input name={"search"} onSearchInput={this.onSearchInput} />;
    // if (!this.state.character) {
    //   return <p>Loading ...</p>;
    // }
    return;

    // this.state.character.map((item) => {
    //   return (
    //     <>

    //       <Character
    //         key={item.quote}
    //         {...item}
    //         onDeleteItem={this.onDeleteItem}
    //       />
    //     </>
    //   );
    // });
  }
}

export default Interface;
