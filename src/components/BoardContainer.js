// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import BoardList from './BoardList';
// import NewestBoardForm from './NewestBoardForm';
// import axios from "axios";

// import './BoardContainer.css'


// function BoardContainer(prop) {

//     const BASE_URL = 'http://localhost:5000';

//     const [boardListCurrentState, setboardList] = useState([]);

//     // Gets the list of all cards for the selected board id and updates the state
//     const refreshBoardList = () => {
        
//         let boardList = []

//         axios.get(`${BASE_URL}/board/${props.selectedBoardId},
//         {
//                 params: {
//                     format: "json",
//                 }

//         }).then((response) => {
//             //console.log(` all board ${response.data}`);

//             for(let i =0; i < response.data.length; i++)
//             {
//                 //console.log(`board id: ${response.data[i]._id}`);
//                 //console.log(`card message: ${response.data[i].message}`);
//                 //console.log(`card likesCount: ${response.data[i].likes_count}`);

//                 boardList.push(
//                     {
//                         "id": response.data[i].board_id, 
//                         "message": response.data[i].title,
//                         "likeCount": response.data[i].owner                       
//                     });
//             }

//             setCardList(cardsList);

//         }).catch((error)=>{
//             console.log("error getting list of card:", error.response.data)
//         });
//     }
