import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, handleName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //function changes
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(() => event.target.value);
    handleName(symbol, event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  //checking is the Editing mode or not
  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  //retuning the data
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
