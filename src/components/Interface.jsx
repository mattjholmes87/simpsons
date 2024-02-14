import React, { useEffect, useState, useCallback } from "react";
import Input from "./Input";
import axios from "axios";
import Characters from "./Characters";
import Nav from "./Nav";
import Loading from "./Loading";
import { IoHeartCircleOutline } from "react-icons/io5";
import Filter from "./Filter";
import { sort } from "../sort";

const Interface = () => {
  const [state, setState] = useState({});

  const onSearchInput = (e) => {
    getCharacters(e.target.value);
  };

  const getCharacters = useCallback(
    async (searchTerm) => {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character=${searchTerm}`
      );
      data.forEach((item, index) => {
        item.id = Math.random() + "" + index;
      });
      setState({ ...state, characters: data });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    getCharacters("");
  }, [getCharacters]);

  const onDeleteItem = (id) => {
    const characters = [...state.characters];
    const index = characters.findIndex((item) => item.id === id);
    characters.splice(index, 1);
    setState({ ...state, characters });
  };

  const toggle = (id) => {
    console.log(id);
    const characters = [...state.characters];
    const index = characters.findIndex((item) => item.id === id);
    characters[index].liked = !characters[index].liked;
    setState({ ...state, characters });
  };

  const onSortSelect = (e) => {
    setState({ ...state, sortSelection: e.target.value });
  };

  console.log(state);
  if (!state.characters) {
    return <Loading />;
  }
  let count = 0;
  state.characters.forEach((item) => {
    if (item.liked) count++;
  });

  // Sort Characters
  let sortedCharacters = [...state.characters];
  if (!state.sortSelection) {
    sortedCharacters = sort(sortedCharacters, "A-Z");
  }
  if (state.sortSelection) {
    sortedCharacters = sort(sortedCharacters, state.sortSelection);
  }

  return (
    <>
      <Nav getCharacters={getCharacters} />
      <div className="interfaceBox">
        <div className="searchCountBox">
          <div className="filterBox">
            <Filter onSortSelect={onSortSelect} />
          </div>
          <div className="searchBox">
            <Input name={"search"} onSearchInput={onSearchInput} />
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
          onDeleteItem={onDeleteItem}
          toggle={toggle}
          liked={state.liked}
        />
      </div>
    </>
  );
};

export default Interface;
