import React, { Component } from "react";
import "./App.css";
import Interface from "./components/Interface";
import Header from "./components/Header";

import Nav from "./components/Nav";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Nav />
        <Interface />
      </>
    );
  }
}

export default App;
