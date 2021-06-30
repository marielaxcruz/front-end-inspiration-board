import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BoardsContainer /> */}
      <CardsContainer boardName="sneha's board" />
    </div>
  );
}

export default App;
