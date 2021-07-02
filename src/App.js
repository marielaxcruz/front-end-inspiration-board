import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import './App.css';
import { useEffect } from 'react';
import axios from "axios";
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const BASE_URL = 'http://localhost:5000/board';
  const [board, setBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: -1
  });
  const [newBoardFormDisplay, setNewBoardFormDisplay] = useState(true)

  const fetchBoards = () => {
    axios
    .get(`${BASE_URL}`)
    .then((response) => {
      console.log(response.data)
      setBoard(response.data)
    })
    .catch((err) => console.log(err));
  }

  const hideNewBoardForm = () => { setNewBoardFormDisplay(!newBoardFormDisplay) }

  useEffect(() => {
    fetchBoards()
  }, [selectedBoard.board_id]);

  //--------- update "selected board"
  const selectBoard = (board) => {
    setSelectedBoard(board)
    console.log('Currently selected board ', board)
    //refreshCardsForSelectedBoard();
  };

  // deleting one specific board
  const onBoardDelete =(board_id) => {
    axios.delete(`${BASE_URL}/${selectedBoard.board_id}`).then((response) => {
      console.log(response.data);
      fetchBoards();
      setSelectedBoard(
        selectBoard.title = "",
        selectBoard.owner = ""
      )
  }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the board.');
  });

};

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
        <h1> ✨ 🌟 ✨ 🌟 Inspiration Board 🌟 ✨ 🌟 ✨ </h1>
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
        <section>
          <h3> Create a New Board</h3>
        <NewBoardForm onSubmitCallback={onSubmitCallbackForNewBoard} />
        </section>
        </section>
        <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.title} - {selectedBoard.owner}</p>
        </section>
        <button className= "deleteButton"
          onClick={() => {onBoardDelete(selectedBoard.id)}}> Delete Board</button>
        <section>
          {newBoardFormDisplay ? <NewBoardForm onSubmitCallback={onSubmitCallbackForNewBoard}></NewBoardForm> : ""}
          <div onClick={hideNewBoardForm}>{newBoardFormDisplay ? "Hide Form" : "Show Form"}</div>
        </section>
      <div>
        <CardsContainer boardName={selectedBoard.title} selectedBoardId={selectedBoard.board_id} />
        </div>
        </main>
        <footer> © M.A.G.S Team</footer>
    </div>
  );
}

export default App;