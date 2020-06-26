import React from "react";
import { Route, Link } from "react-router-dom";
const Rules = () => {
  return (
    <div className="rules">
      <h3>Rules of the Game:</h3>
      <p>
        1. Any live cell with fewer than 2 live neighbors dies, as if by
        underpopulation.
      </p>
      <p>
        2. Any live cell with 2 or 3 live neighbors lives on to the next
        generation.
      </p>
      <p>
        3. Any live cell with more than 3 live neighbors dies, as if by
        overpopulation.
      </p>
      <p>
        4. Any dead cell with exactly 3 live neighbors becomes a live cell, as
        if by reproduction.
      </p>
    </div>
  );
};
export default Rules;
