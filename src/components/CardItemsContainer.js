import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
//import './CardItemsContainer.css'

const CardItemsContainer = (props) => {
     
    const cardItems = props.cards.map((card) => {
     
      return (
         <CardItem id={card.id} message={card.message} likeCount={card.likeCount}></CardItem>
       );
      });
    
    return (
        <div class="card-items__container">
            {cardItems}
        </div>
    );
}

export default CardItemsContainer;