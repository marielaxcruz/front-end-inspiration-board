import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [currentSelectedBoardId, setSelectedBoardId] = useState(-1); // -1 is the initial state, not using 0 because 0 is a valid boardid
  const [currentBoardName, setBoardName] = useState("");

  const onBoardSelectedCallback = (selectedBoardId, selectedBoardName) => {
    // Set the state for the selected board so the CardContainer can use it to behave correctly.
    setBoardName(selectedBoardName);
    setSelectedBoardId(selectedBoardId);
  }

  return (
    // UnComment the commented lines below in the final app

    <div className="App">
      {/* <BoardsContainer onBoardSelectedCallback={onBoardSelectedCallback} /> */}
      {/* <CardsContainer boardName={currentBoardName} selectedBoardId={currentSelectedBoardId} /> */}
      <CardsContainer boardName="Sneha's board" selectedBoardId="1" />
    </div>
  );
}

export default App;
