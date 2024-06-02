const Player1 = ({ player1Score, player1Current }) => {
  return (
    <div className="block_player_1">
      <h1>player1</h1>
      <div className="player1score playerScore">{player1Score}</div>
      <div className="curent_header">current</div>
      <div className="current_Player1 current">{player1Current}</div>
    </div>
  );
};

export default Player1;
