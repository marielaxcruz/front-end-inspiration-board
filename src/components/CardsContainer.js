import React from 'react';
import PropTypes from 'prop-types';
import CardItemsContainer from './CardItemsContainer';
import NewCardForm from './NewCardForm';

//import './CardsContainer.css'

const CardsContainer = (props) => {
    
    // note: below is some sample data for testing only, actual data will be passed in
    // based on results of the API call to get all cards for a board.
    const allCardsForSelectedBoard = [
        {
            'id':1, 
            'message': "test card",
            'likesCount': 2
        }
    ]; // props.allCardsForSelectedBoard

    return (
        <section class="cards__container">
            <section>
                <h2>Cards for scissors</h2>
                <CardItemsContainer cards={allCardsForSelectedBoard} />
            </section>
            <section class="new-card-form__container">
                <h2>Create a New Card</h2>
                <NewCardForm />
            </section>
        </section>
    );
}

export default CardsContainer;