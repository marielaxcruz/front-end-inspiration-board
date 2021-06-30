import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewBoardForm
        //setBoards = {setBoards}
        />
        <NewCardForm/>
      </header>
    </div>
  );
}

export default App;
