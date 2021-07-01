import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';


//const App = () =>{
  // use use effect with a callback function 

//}
// another way to do it
// const addCard =
// axios.post("URL", cardData)
    ////.then(Response)=>{
    //  axios.get
    //})



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewBoardForm
        //setBoards = {setBoards}
        
        />
        <h2> cards </h2>
        <NewCardForm/>
      </header>
    </div>
  );
}

export default App;
