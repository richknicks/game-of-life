import React from "react";
import About from "./components/About";
import Grid from "./components/Grid";
import Generation from "./components/Generation";
import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>The Game of Life</h1>
      <Generation />
      <Grid />
      <Rules />
      <About />
    </div>
  );
};

export default App;
