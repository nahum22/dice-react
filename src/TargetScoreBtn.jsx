import React from "react";

const TargetScoreBtn = ({ targetScore, setTargetScore }) => {
  function settingTargetScore(e) {
    setTargetScore(e.target.value);
  }

  return (
    <input
      type="number"
      id="targetScore"
      min={1}
      max={1000}
      onKeyUp={settingTargetScore}
    />
  );
};

export default TargetScoreBtn;
