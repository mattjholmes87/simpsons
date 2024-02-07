import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
    );

    this.setState({ character: data });
  }

  onDeleteItem = (quote) => {
    const character = [...this.state.character];
    const index = character.findIndex((item) => item.quote === quote);
    character.splice(index, 1);
    this.setState({ character });
  };

  render() {
    console.log(this.state);
    if (!this.state.character) {
      return <p>Loading ...</p>;
    }
    return (
      <>
        <Header />
        <Map
          character={this.state.character}
          onDeleteItem={this.onDeleteItem}
        />
      </>
    );
  }
}

export default App;
