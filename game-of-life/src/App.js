import React from "react";
import About from "./components/About";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid />
      <Rules />
      <About />
    </div>
  );
};

export default App;
