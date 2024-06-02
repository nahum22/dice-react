import React from "react";

const StartGameBtn = ({ SetStartGame }) => {
  const startGame = () => {
    SetStartGame(true);
  };

  return (
    <button id="set-score-btn" onClick={startGame}>
      start game
    </button>
  );
};

export default StartGameBtn;
