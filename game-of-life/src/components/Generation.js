import React from "react";

function GenDisplay({ genCount }) {
  return (
    <div>
      <h3>{`Number of Generations: ${genCount}`}</h3>
    </div>
  );
}

export default GenDisplay;
