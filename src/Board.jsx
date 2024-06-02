import { useState, useEffect } from "react";

const Board = ({
  activePlayer,
  setActivePlayer,
  player1Score,
  setPlayer1Score,
  player2Score,
  setPlayer2Score,
  setStartGame,
  player1Current,
  setPlayer1Current,
  player2Current,
  setPlayer2Current,
  targetScore,
}) => {
  const [cube1, setCube1] = useState(Math.round(Math.random() * 5 + 1));
  const [cube2, setCube2] = useState(Math.round(Math.random() * 5 + 1));

  // Initialize player1Score and player2Score internally
  const [internalPlayer1Score, setInternalPlayer1Score] = useState(0);
  const [internalPlayer2Score, setInternalPlayer2Score] = useState(0);

  function newGame() {
    setStartGame(false);
    // Reset internal scores here as well
    setInternalPlayer1Score(0);
    setInternalPlayer2Score(0);
  }

  useEffect(() => {
    setPlayer2Score(internalPlayer2Score); // Update external state based on internal state
    setPlayer1Score(internalPlayer1Score); // Update external state based on internal state
    setActivePlayer(1);
  }, [internalPlayer1Score, internalPlayer2Score, setActivePlayer]);

  useEffect(() => {
    if (
      (internalPlayer1Score >= targetScore && targetScore > 0) ||
      (internalPlayer2Score >= targetScore && targetScore > 0)
    ) {
      newGame();
    }
  }, [internalPlayer1Score, internalPlayer2Score, targetScore]);

  useEffect(() => {
    setPlayer1Current(cube1 + cube2);
  }, [setStartGame]);

  function switchTurns() {
    setInternalPlayer1Score(player1Current);
    setInternalPlayer2Score(player2Current);
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  }

  function increaseActivePlayerScore(cubes) {
    if (activePlayer === 1) {
      setInternalPlayer1Score((prevScore) => prevScore + cubes);
    } else {
      setInternalPlayer2Score((prevScore) => prevScore + cubes);
    }
  }

  function increaseActivePlayerCurrent(cubes) {
    if (activePlayer === 1) {
      setPlayer1Current((prevCurrent) => prevCurrent + cubes);
    } else {
      setPlayer2Current((prevCurrent) => prevCurrent + cubes);
    }
  }

  function playDiceSound() {
    let audioContext = new AudioContext();

    if (!audioContext) {
      console.error("AudioContext is not supported.");
      return;
    }

    fetch("dice-142528.mp3")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0);
      })
      .catch((error) => {
        console.error("Error loading audio:", error);
        if (error instanceof DOMException && error.name === "DecodeError") {
          console.error("Failed to decode audio data:", error.message);
        }
      });
  }

  function rollDice() {
    playDiceSound();
    setCube1(Math.round(Math.random() * 5 + 1));
    setCube2(Math.round(Math.random() * 5 + 1));
    increaseActivePlayerCurrent(cube1 + cube2);
  }

  return (
    <div className="board_interface">
      <button className="new_game action" onClick={newGame}>
        NEW GAME
      </button>
      <div className="flex">
        <img
          className="image_dice1 cubeImage"
          src={`dice-${cube1}.png`}
          alt="Dice 1"
        />
      </div>
      <div className="flex">
        <img
          className="image_dice2 cubeImage"
          src={`dice-${cube2}.png`}
          alt="Dice 2"
        />
      </div>
      <button className="roll_dice action" onClick={rollDice}>
        ROLL DICE
      </button>
      <button className="move_game action" onClick={switchTurns}>
        HOLD
      </button>
    </div>
  );
};

export default Board;
