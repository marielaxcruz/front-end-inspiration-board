import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [currentSelectedBoardId, setSelectedBoardId] = useState(-1);
  
  return (
    <div className="App">
      {/* <BoardsContainer /> */}
      <CardsContainer boardName="Sneha's board" selectedBoardId="1" />
    </div>
  );
}

export default App;
