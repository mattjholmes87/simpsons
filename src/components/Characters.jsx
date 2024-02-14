import React from "react";
import Character from "./Character";
import Loading from "./Loading";
import Error from "./Error";

const Characters = (props) => {
  const { characters, onDeleteItem, toggle } = props;

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
};

export default Characters;
