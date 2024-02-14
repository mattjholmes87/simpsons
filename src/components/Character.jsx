import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartDislikeCircleOutline } from "react-icons/io5";

const Character = (props) => {
  const {
    character,
    characterDirection,
    image,
    quote,
    id,
    onDeleteItem,
    toggle,
    liked,
  } = props;

  const iconStylesOn = {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  };
  const iconStylesOff = {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "none",
  };

  return (
    <div className={`characterCard ${characterDirection} ${liked}`} key={id}>
      <div className="characterName">
        <h1>{character}</h1>
      </div>

      <div className="characterQuote">"{quote}"</div>
      <div className="characterImage">
        <img src={image} tag={characterDirection} alt={character} />
      </div>
      <div className="buttonBox">
        <div
          className={liked ? "button on" : "button off"}
          onClick={() => toggle(id)}
        >
          <IoHeartCircleOutline style={liked ? iconStylesOn : iconStylesOff} />
          <IoHeartDislikeCircleOutline
            style={liked ? iconStylesOff : iconStylesOn}
          />
        </div>
        <div className="button delete" onClick={() => onDeleteItem(id)}>
          <RiDeleteBin5Line style={iconStylesOn} />
        </div>
      </div>
    </div>
  );
};

export default Character;
