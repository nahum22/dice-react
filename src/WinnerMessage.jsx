import React, { useEffect } from "react";

const WinnerMessage = ({
  player1Score,
  player2Score,
  targetScore,
  setPlayer1Score,
  setPlayer2Score,
}) => {
  useEffect(() => {
    if (player1Score >= targetScore && targetScore > 0) {
      //      setPlayer1Score(0);
      //8     setPlayer2Score(0);
    } else if (player2Score >= targetScore && targetScore > 0) {
      //    setPlayer1Score(0);
      //   setPlayer2Score(0);
    }
  }, [player1Score, player2Score, targetScore]);

  if (player1Score >= targetScore && targetScore > 0) {
    return <div>Player 1 is the winner!</div>;
  } else if (player2Score >= targetScore && targetScore > 0) {
    return <div>Player 2 is the winner!</div>;
  }

  return null;
};

export default WinnerMessage;
