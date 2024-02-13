import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
import Characters from "./Characters";
import Nav from "./Nav";
import Loading from "./Loading";
import { IoHeartCircleOutline } from "react-icons/io5";
import Filter from "./Filter";
import { sort } from "../sort";

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

  onSortSelect = (e) => {
    this.setState({ sortSelection: e.target.value });
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

    // Sort Characters
    let sortedCharacters = [...this.state.characters];
    if (!this.state.sortSelection) {
      sortedCharacters = sort(sortedCharacters, "A-Z");
    }
    if (this.state.sortSelection) {
      sortedCharacters = sort(sortedCharacters, this.state.sortSelection);
    }

    return (
      <>
        <Nav getCharacters={this.getCharacters} />
        <div className="interfaceBox">
          <div className="searchCountBox">
            <div className="filterBox">
              <Filter onSortSelect={this.onSortSelect} />
            </div>
            <div className="searchBox">
              <Input name={"search"} onSearchInput={this.onSearchInput} />
            </div>
            <div className={`countBox ${count > 0 ? "on" : "off"}`}>
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
            characters={sortedCharacters}
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
