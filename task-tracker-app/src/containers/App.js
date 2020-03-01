import React from "react";
import logo from "../logo.svg";
import "../App.css";
import MainContainer from "./MainContainer";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContainer />
    </div>
  );
}

export default App;
