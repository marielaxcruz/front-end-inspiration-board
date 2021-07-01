import React, { useState } from 'react';
import axios from 'axios';


// props will come from board name ,
// new card from data will be linked to the board name selected 
// this new card form will go to card container / all cards show up here
const NewCardForm = (props) => {
    const [message, setMessage] = useState('');

    const BASE_URL = "https://localhost:5000";
// this function gets called when the user starts typing
    const onCardChange = (event) => {
        //console.log(event);
        console.log(event.target.name);
        // get the field they are typing in 
        setMessage(event.target.value);
    }
// this function will get called when the user submits 
    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
        console.log(message)
        const requestBody = {
        message: message
        }
        console.log(requestBody);
        axios.post(`${BASE_URL}/board/board_id/cards`, requestBody)
        // call board to rerender to add the new board , I need to refresh the list 
        .then((response)=>{
            axios.get(`${BASE_URL}/boards/board_id/cards`).then((cardsResponse)=>{
            const cards = cardsResponse.data
            props.setCards(cards)       
            })
        })
        console.log("New Card created")
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Message</label>
        <input 
        name="message-input" 
        id="message-input" 
        value={message} 
        onChange={onCardChange} />
        {/*<button>Submit</button>*/}
        <input type="submit" value="Submit Card" />
    </form>
    )
}


export default NewCardForm;



// cards get updated every time board is selected
// selected board component can be passed to card list
//  card list will take board id and query all the cards of that board in order to create a list of card components
// selected board, we have all their cards aka the student list 
// selected board passes down a function to create a card form 