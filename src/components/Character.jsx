import React, { Component } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartDislikeCircleOutline } from "react-icons/io5";

class Character extends Component {
  state = {};
  render() {
    const {
      character,
      characterDirection,
      image,
      quote,
      id,
      onDeleteItem,
      toggle,
      liked,
    } = this.props;

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

    if (characterDirection === "Right") {
      return (
        <div className={`characterCard ${characterDirection}`} key={image}>
          <h1>{character}</h1>

          <p>{quote}</p>
          <img src={image} tag={characterDirection} alt={character} />
          <div className="buttonBox">
            <div
              className={liked ? "button on" : "button off"}
              onClick={() => toggle(id)}
            >
              <IoHeartCircleOutline
                style={liked ? iconStylesOn : iconStylesOff}
              />
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
    }
    return (
      <div className={`characterCard ${characterDirection}`} key={image}>
        <h1>{character}</h1>
        <p>{quote}</p>
        <img src={image} tag={characterDirection} alt={character} />
        <div className="buttonBox">
          <div
            className={liked ? "button on" : "button off"}
            onClick={() => toggle(id)}
          >
            <IoHeartCircleOutline
              style={liked ? iconStylesOn : iconStylesOff}
            />
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
  }
}

export default Character;
