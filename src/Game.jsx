import React, { useState } from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";
import Board from "./Board";

const Game = ({
  activePlayer,
  setActivePlayer,
  player1Score,
  setPlayer1Score,
  player2Score,
  setPlayer2Score,
  setStartGame,
  targetScore,
}) => {
  const [player1Current, setPlayer1Current] = useState(0);
  const [player2Current, setPlayer2Current] = useState(0);
  return (
    <>
      <Player1 player1Score={player1Score} player1Current={player1Current} />
      <Board
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        player1Score={player1Score}
        setPlayer1Score={setPlayer1Score}
        player2Score={player2Score}
        setPlayer2Score={setPlayer2Score}
        setStartGame={setStartGame}
        player1Current={player1Current}
        setPlayer1Current={setPlayer1Current}
        player2Current={player2Current}
        setPlayer2Current={setPlayer2Current}
        targetScore={targetScore}
      />
      <Player2 player2Score={player2Score} player2Current={player2Current} />
    </>
  );
};

export default Game;
