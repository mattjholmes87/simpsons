import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
import Characters from "./Characters";
import Nav from "./Nav";
import Loading from "./Loading";
import { IoHeartCircleOutline } from "react-icons/io5";

class Interface extends Component {
  state = { count: 0 };

  async componentDidMount() {
    this.getCharacters("");
  }

  getCharacters = async (searchTerm) => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character=${searchTerm}`
    );
    data.forEach((item, index) => {
      item.id = Math.random() + "" + index;
    });
    this.setState({ characters: data });
  };

  onDeleteItem = (id) => {
    const characters = [...this.state.characters];
    const index = characters.findIndex((item) => item.id === id);
    characters.splice(index, 1);
    this.setState({ characters });
  };

  onSearchInput = (e) => {
    this.getCharacters(e.target.value);
  };

  toggle = (id) => {
    const characters = [...this.state.characters];
    const index = characters.findIndex((item) => item.id === id);

    characters[index].liked = !characters[index].liked;
    this.setState({ characters });
  };

  render() {
    console.log(this.state);
    if (!this.state.characters) {
      return <Loading />;
    }
    let count = 0;
    this.state.characters.forEach((item) => {
      if (item.liked) count++;
    });
    return (
      <>
        <Nav getCharacters={this.getCharacters} />
        <div className="interfaceBox">
          <div className="searchCountBox">
            <div className="searchBox">
              <Input name={"search"} onSearchInput={this.onSearchInput} />
            </div>
            <div className="countBox">
              <IoHeartCircleOutline
                className="countTotalIcon"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "transparent",
                }}
              />
              {count}
            </div>
          </div>

          <Characters
            characters={this.state.characters}
            onDeleteItem={this.onDeleteItem}
            toggle={this.toggle}
            liked={this.liked}
          />
        </div>
      </>
    );
  }
}

export default Interface;
