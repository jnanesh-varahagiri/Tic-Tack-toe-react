import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
// import GameOver from "components/GameOver";
import React from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

//App component
function App() {
  //Players mapping
  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });

  //turns for tic tac toe
  const [gameTurns, setGameTurns] = useState([]);
  //restarting the game
  function restart() {
    console.log("Hello");
    setGameTurns(() => []);
  }

  //handling playerName  change
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, columnIndex) {
    // setActivePlayer((prev) => prev==='X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      console.log(updatedTurns);
      return updatedTurns;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          Players
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player1"
              symbol={"X"}
              handleName={handlePlayerNameChange}
              isActive={activePlayer === "X"}
            ></Player>
            <Player
              initialName="Player2"
              symbol={"O"}
              handleName={handlePlayerNameChange}
              isActive={activePlayer === "O"}
            ></Player>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            restart={restart}
            playerMap={players}
            turns={gameTurns}
          ></GameBoard>
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
