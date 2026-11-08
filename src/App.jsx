import React from 'react';
import PlayerSetup from './components/PlayerSetup';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);
  const [players, setPlayers] = React.useState([]);
  return gameStarted ? <div>Game Started</div> : <PlayerSetup onStartGame={(playerNames) => { setPlayers(playerNames); setGameStarted(true); }} />;

}

export default App;