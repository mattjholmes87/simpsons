import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    const { name, type, onSearchInput } = this.props;

    return (
      <div className="formBox">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor={name}>Character Search:</label>
            <input
              onInput={onSearchInput}
              type={type ? type : "text"}
              id={name}
              name={name}
            />
            <p></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Input;
