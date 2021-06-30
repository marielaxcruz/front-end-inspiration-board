import axios from 'axios';
import React, { useState } from 'react';

// next step is the board list 
// props are 
const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const BASE_URL = "https://localhost:5000/board";
// onTitleChange takes in one argument, event, which we expect to be information about the event that triggers our event handler.
    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const onOwnerChange = (event) => {
        setOwner(event.target.value);
    }
    // Handling Form Submissions - event handler 
    const onFormSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
        console.log(title, owner)
        const requestBody = {
        title: title,
        owner: owner
        }
        console.log(requestBody);
        axios.post(`${BASE_URL}`, requestBody) 
        .then((response)=>{
            axios.get(`${BASE_URL}`).then((boardsResponse)=>{
            const boards = boardsResponse.data
            props.setBoards(boards)       
            })
        })
        console.log("New board created")
    }


    return (
    <form onSubmit={onFormSubmit} >
        <label>Title</label>
        <input name="title-input" id="title-input" value={title} onChange={onTitleChange} />
        <label>Owner's Name </label>
        <input name="owner-input" id="owner-input" value={owner} onChange={onOwnerChange} />
        {/*<button>Submit</button>*/}
        {/*<input type="submit" />*/}
        <button onClick={onFormSubmit}>Create New Board</button>
    </form>
    )
};

export default NewBoardForm; 

// After hitting Submit, the board list gets updated 
// board form - takes in form data and sends it back to app 
// app will re render and display the newly added board 