import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    const { onSortSelect } = this.props;

    return (
      <select
        onChange={onSortSelect}
        style={{
          border: "solid 1px #70d1fe",
          borderRadius: "5px",
          padding: "2px",
          color: "#70d1fe",
        }}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Liked">Liked</option>
        <option value="notLiked">Not Liked</option>
      </select>
    );
  }
}

export default Filter;
