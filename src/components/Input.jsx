import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    const { name, type, onSearchInput } = this.props;

    return (
      <div className="formBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor={name}>Character Search: </label>
          <input
            placeholder=" Find your favourite ..."
            onInput={onSearchInput}
            type={type ? type : "text"}
            id={name}
            name={name}
            style={{
              border: "solid 1px #70d1fe",
              borderRadius: "5px",
              padding: "2px",
              color: "#70d1fe",
            }}
          />
          <p></p>
        </form>
      </div>
    );
  }
}

export default Input;
