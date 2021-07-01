import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [currentSelectedBoardId, setSelectedBoardId] = useState(-1); // -1 is the initial state, not using 0 because 0 is a valid boardid
  const [currentBoardName, setBoardName] = useState("");

  return (
    <div className="App">
      {/* <BoardsContainer /> */}
      {/* <CardsContainer boardName={currentBoardName} selectedBoardId={currentSelectedBoardId} /> */}
      <CardsContainer boardName="Sneha's board" selectedBoardId="1" />
    </div>
  );
}

export default App;
