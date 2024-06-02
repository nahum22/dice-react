const Player2 = ({ player2Score, player2Current }) => {
  return (
    <div className="block_player_2">
      <h1>player2</h1>
      <div className="player2score playerScore">{player2Score}</div>
      <div className="curent_header">current</div>
      <div className="current_Player2 current">{player2Current}</div>
    </div>
  );
};

export default Player2;
