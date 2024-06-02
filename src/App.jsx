import { useState } from "react";
import "./index.css";
import Instructions from "./Instructions";
import Game from "./Game";
import WinnerMessage from "./WinnerMessage";
//when strat game is false only instructions are dislayed

function App() {
  const [startGame, setStartGame] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [targetScore, setTargetScore] = useState(0);

  console.log(startGame);
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js"></script>
      <WinnerMessage
        player1Score={player1Score}
        player2Score={player2Score}
        targetScore={targetScore}
        setPlayer1Score={setPlayer1Score}
        setPlayer2Score={setPlayer2Score}
      />

      {!startGame ? (
        <Instructions
          startGame={startGame}
          SetStartGame={setStartGame}
          targetScore={targetScore}
          setTargetScore={setTargetScore}
        />
      ) : (
        <Game
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          player1Score={player1Score}
          setPlayer1Score={setPlayer1Score}
          player2Score={player2Score}
          setPlayer2Score={setPlayer2Score}
          setStartGame={setStartGame}
          targetScore={targetScore}
        />
      )}
    </>
  );
}

export default App;
