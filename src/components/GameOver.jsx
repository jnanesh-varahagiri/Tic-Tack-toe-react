import React from "react";

export default function GameOver({ winner, restart, playerMap }) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{playerMap[winner]} won!</p>}
        {!winner && <p>Its a draw</p>}
        <p>
          <button onClick={() => restart()}>Rematch!</button>
        </p>
      </div>
    </>
  );
}
