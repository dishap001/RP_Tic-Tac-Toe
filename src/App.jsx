import React, { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"


function App() {
  const[activePlayer,setActivePlayer]=useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O':'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialName="Player1" symbol="X" isActive={activePlayer ==='X'}/>
        <Player initialName="Player2" symbol="O" isActive={activePlayer ==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlaySymbol={activePlayer}/>
      </div>
      LOG
    </main>
    
  );
}

export default App;
