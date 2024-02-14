import React from "react";

const Input = (props) => {
  const { name, type, onSearchInput } = props;

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
};

export default Input;
