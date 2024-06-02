import React from "react";

import "./index.css";
import StartGameBtn from "./StartGameBtn";
import TargetScoreBtn from "./TargetScoreBtn";

const Instructions = ({
  startGame,
  SetStartGame,
  targetScore,
  setTargetScore,
}) => {
  return (
    <div className="instructions-window">
      <div className="instructions-content">
        <h2>Game Instructions</h2>
        <p>Here are the rules of the game:</p>
        <ul>
          <li>
            In your turn roll the dice at list once and accumulate the result,
            in Current
          </li>
          <li>
            ou can roll again or click Hold to save the points from Current and
            end the turn
          </li>
          <li>
            ou can roll again or click Hold to save the points from Current and
            end the turn
          </li>
          <li>
            Notice! if you get 6-6- you will lose all points from current and
            the turn will go to your opponent.
          </li>
          <li>
            ou can roll again or click Hold to save the points from Current and
            end the turn
          </li>
        </ul>
        <div>set here the target score</div>
        <TargetScoreBtn
          targetScore={targetScore}
          setTargetScore={setTargetScore}
        />
        <br />
        <StartGameBtn SetStartGame={SetStartGame} />
      </div>
    </div>
  );
};

export default Instructions;
