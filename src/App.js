import React, { Component } from "react";
import "./App.css";
import Interface from "./components/Interface";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Interface />
      </>
    );
  }
}

export default App;
