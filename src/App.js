import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import BoardList from './components/BoardList';
//import './BoardList.css';
//import Board from './components/Board';

function App() {
  const BASE_URL = 'http://localhost:5000/board';
  const [board, setBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    //cards: [],
  });

  useEffect(() => {
    axios
    .get(`${BASE_URL}`)
    .then((response) => {
      console.log(response.data)
      setBoard(response.data)
    })
    .catch((err) => console.log(err));
  }, []);

  //--------- update "selected board"
  const selectBoard = (board) => {
    setSelectedBoard(board)
    //onBoardSelect={selectBoard}
    console.log('Currently selected board ', board)
  }

  return (
    <div className="App">
      <header>
        INSPIRATION Board
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
      </main>
    </div>
  );
}

export default App;