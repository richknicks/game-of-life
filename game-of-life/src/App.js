import React from "react";
import About from "./components/About";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <MainDiv>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/game">Game</Link>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/rules" component={Rules} />
      <Route path="/game" component={Grid} />

      <h1>The Game of Life</h1>
    </MainDiv>
  );
};

export default App;
