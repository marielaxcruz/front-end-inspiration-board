import React, { useState, useEffect } from "react";
import "./App.css";



//import Board from "./components/Board";
//import Cards from "./components/Cards";
import axios from 'axios';
// var log = require('console-log-level')({ level: 'info' });
//add the appropriate sytax for <board>


 {/*
function Axios(){
        axios.get(URL,
        { //not sure if we need values for get
          params: {
            board_id:'',
            card_id: '',
          }

        })
        .then((response) => {
          console.log('success!');
          console.log(response) //response.data
        })
        .catch((error) => {
          console.log('failed!');
          console.log(error)  //error.response.data
        });
       
        .finally(() => {
          not sure if we need to do something here to close our database?
        })
       

        const cardData = {
          message: ''
        }
        axios
        .post('/card', cardData)
       
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
}
 */}
const App = () => {
  // [board,setBoard] = useState(generateBoard());
  // [cards,setCards] = useState(generateCards());
  //const [currentSelectedBoardId, setselectedBoardId] = useState(-1);
  const [errorMessage, setErrorMessage] = useState('');
  const URL = "http://localhost:5000/board";
  // let [responseData, setResponseData] = useState('');

  useEffect(() => {
    console.log(URL)
    axios.get(URL)
      .then ((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        setErrorMessage(
          console.log(error)
        
        );
      });
  }, []);  
  return (
    <div>
      {errorMessage}
      {/*<BoardsContainer/>
      <CardsContainer boardName = "Sneha's board" 
      selectedBoardID={currentSelectedBoardID}/>
      */}
    </div>
  );
}

export default App;
