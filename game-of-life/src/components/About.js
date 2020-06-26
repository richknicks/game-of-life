import React from "react";
import App from "../App";
import { Route, Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/game">Game</Link>
      <Route exact path="/" component={App} />
      <p>
        The Game of Life, also known simply as Life, is a cellular automaton
        devised by the British mathematician John Horton Conway in 1970.[1] It
        is a zero-player game, meaning that its evolution is determined by its
        initial state, requiring no further input. One interacts with the Game
        of Life by creating an initial configuration and observing how it
        evolves. It is Turing complete and can simulate a universal constructor
        or any other Turing machine.
      </p>
    </div>
  );
};
export default About;
