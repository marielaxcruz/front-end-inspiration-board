import React from 'react';
import PropTypes from 'prop-types';

//import './CardItem.css'

const CardItem = (props) => {

    const onClickCardItemDeleteCallback = (id, e) => {
        console.log(`Card item ${id} delete button click`)
    };

    const onClickCardItemLikeCallback = (id, e) => {
        console.log(`Card item ${id} like button click`)
    };

    return (
        <div class="card-item">
        <p class="card-item__message">{props.message}</p>
        <ul class="card-item__controls">
        <li>
            <p>{props.likeCount} 💕</p>
        </li>
        <li>
            <button onClick={onClickCardItemLikeCallback}>+1</button>
        </li>
        <li>
            <button class="card-item__delete" onClick={onClickCardItemDeleteCallback}>Delete</button>
        </li>
        </ul>
    </div>
   );
}

export default CardItem;