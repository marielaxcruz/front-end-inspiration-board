import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
//import './CardItemsContainer.css'

const CardItemsContainer = (props) => {
    
    //const cardList = generateCardComponents(props.cards);
    //console.log('1-d square list', squareList);
    
    const cardItems = props.cards.map((card) => {
      //console.log('sq-value:', sq.value);
      //console.log('sq-id:', sq.id);
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