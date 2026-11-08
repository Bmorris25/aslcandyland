import React from 'react';

function PlayerSetup({ onStartGame }) {
  const [playerCount, setPlayerCount] = React.useState(1);
  const players = [1, 2, 3, 4];
  const [playerNames, setPlayerNames] = React.useState(['', '', '', '']);
  const handlePlayerNameChange = (player, name) => {
    setPlayerNames((names) => names.map((currentName, index) => index === player - 1 ? name : currentName));
  };
  
  const handlePlayerCountChange = (count) => {
    setPlayerCount(count);
  };

  const handleStartGame = (count, names) => {
    console.log('Starting game with', count, 'players:', names.slice(0, count));
    onStartGame(names.slice(0, count));
  };

  return (
    <div className="PlayerSetup">
      <h1>ASL Candyland</h1>
      <p>Welcome to the game!</p>
      <fieldset>
        <legend>How many players?</legend>
        {players.map((player) => (
          <React.Fragment key={player}>
            <input type="radio" id={`playerCount${player}`} name="playerCount" value={player} checked={playerCount === player} onChange={() => handlePlayerCountChange(player)} />
            <label htmlFor={`playerCount${player}`}>{player}</label>
          </React.Fragment>
        ))}
      </fieldset>
      {players.slice(0, playerCount).map((player) => (
        <div key={player}><label htmlFor={`playerName${player}`}>Player {player}</label><input type="text" id={`playerName${player}`} value={playerNames[player - 1]} onChange={(event) => handlePlayerNameChange(player, event.target.value)} /> </div>
      ))}

      <button type="button" onClick={() => handleStartGame(playerCount, playerNames)}>Start Game</button>
    </div>
  );
}

export default PlayerSetup;
