import React from "react";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "../Winning-combination";
import GameOver from "./GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function hasWinned(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      secondSquareSymbol &&
      thirdSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      return firstSquareSymbol;
    }
  }
  return false;
}

export default function GameBoard({
  onSelectSquare,
  turns,
  restart,
  playerMap,
}) {
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  console.log("Inside game board", turns);
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    console.log("Hello");
  }
  let winner = hasWinned(gameBoard);
  console.log(winner);

  //  const [gameBoard , setGameBoard] = useState(initialGameBoard)
  //  function handleSelectSquare(rowIndex,columnIndex){
  //     console.log(rowIndex,columnIndex)
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
  //       updatedBoard[rowIndex][columnIndex] = activePlayer;
  //       return updatedBoard;
  //     })
  //     onSelectSquare()
  //  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {row.map((column, columnIndex) => {
                  return (
                    <li key={`${rowIndex}${columnIndex}`}>
                      <button
                        onClick={() => onSelectSquare(rowIndex, columnIndex)}
                        disabled={column ? true : false}
                      >
                        {column}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
      {(winner || turns.length === 9) && (
        <GameOver
          winner={winner}
          restart={restart}
          playerMap={playerMap}
        ></GameOver>
      )}
    </>
  );
}
