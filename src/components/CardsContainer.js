import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardItemsContainer from './CardItemsContainer';
import NewCardForm from './NewCardForm';
import axios from "axios";

//import './CardsContainer.css'

const CardsContainer = (props) => {
    
    const BASE_URL = 'http://localhost:5000';

    const [cardListCurrentState, setCardList] = useState([]);

    // Gets the list of all cards for the selected board id and updates the state
    const refreshCardsForSelectedBoard = () => {
        
        let cardsList = []

        axios.get(`${BASE_URL}/board/${props.selectedBoardId}/cards`,
        {
                params: {
                    format: "json",
                }

        }).then((response) => {
            //console.log(`cards for board ${response.data}`);

            for(let i =0; i < response.data.length; i++)
            {
                console.log(`${response.data[i].message}`);
                console.log(`${response.data[i].likes_count}`);

                cardsList.push(
                    {
                        "id": response.data[i].card_id, 
                        "message": response.data[i].message,
                        "likeCount": response.data[i].likes_count                        
                    });
            }

            cardsList = response.data;
            setCardList(cardsList);

        }).catch((error)=>{
            console.log("error getting list of card:", error.response.data)
        });
    }

    const onSubmitCallbackForNewCard = (messageText) => {

        // call API to create card with provided message
        axios.post(`${BASE_URL}/board/1/cards`, {
            message: messageText
          })
          .then((response) => {
            console.log(response.data);
            // call API to get the latest list of cards for selected board.
            refreshCardsForSelectedBoard();
          
          }, (error) => {
            console.log(error);
          });
    };

    useEffect(() => {
        // 
        refreshCardsForSelectedBoard();
    }, []);

    //console.log(`cardListCurrentState: ${cardListCurrentState}`);

    return (
        <section class="cards__container">
            <section>
                <h2>Cards for {props.boardName}</h2>
                <CardItemsContainer cards={cardListCurrentState} />
            </section>
            <section class="new-card-form__container">
                <h2>Create a New Card</h2>
                <NewCardForm onSubmitCallback={onSubmitCallbackForNewCard} />
            </section>
        </section>
    );
}

export default CardsContainer;