import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import logo from './logo.svg';
import './App.css';
// -----------------------------AIDA----------------------------
import { useEffect } from 'react';
import axios from "axios";
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
//import NewCardForm from './components/NewCardForm';


function App() {

  const BASE_URL = 'http://localhost:5000/board';
  const [board, setBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: -1
    //cards: [],
  });
  //Sneha--
  // const [currentSelectedBoardId, setSelectedBoardId] = useState(-1); // -1 is the initial state, not using 0 because 0 is a valid boardid
  // const [currentBoardName, setBoardName] = useState("");

  // const onBoardSelectedCallback = (selectedBoardId, selectedBoardName) => {
  //   // Set the state for the selected board so the CardContainer can use it to behave correctly.
  //   setBoardName(selectedBoardName);
  //   setSelectedBoardId(selectedBoardId);
  // };

  const fetchBoards = () => {
    axios
    .get(`${BASE_URL}`)
    .then((response) => {
      console.log(response.data)
      setBoard(response.data)
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchBoards()
  }, []);

  //--------- update "selected board"
  const selectBoard = (board) => {
    setSelectedBoard(board)
    console.log('Currently selected board ', board)
    //refreshCardsForSelectedBoard();
  }

  const onSubmitCallbackForNewBoard = (title,owner) => {
    // call API to create card with provided message
    axios.post(`${BASE_URL}`, {
        title: title,
        owner: owner
      })
      .then((response) => {
        console.log(response.data, '!');
        fetchBoards()
      }, (error) => {
        console.log(error);
      });
};

  return (
    <div className="App">
      <header className="App-header">
        INSPIRATION Board
        <NewBoardForm onSubmitCallback={onSubmitCallbackForNewBoard} />
        {/* <h2> cards </h2> */}
        {/* <NewCardForm/> */}
      </header>
      <main>
        <section className="container">
          <section>
            <h3 className="forBoards change">Boards</h3>
            <section className="allBoard">
            <BoardList 
            board={board}
            onSelectBoardCallBack={selectBoard} />
          </section>
        </section>
        </section>
        <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.title} - {selectedBoard.owner}</p>
        </section>
    
      <div>
        <CardsContainer boardName={selectedBoard.title} selectedBoardId={selectedBoard.board_id} />
        </div>
        </main>
    </div>
  );
}

export default App;