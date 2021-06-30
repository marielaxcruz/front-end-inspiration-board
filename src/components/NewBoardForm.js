import React, { useState } from 'react';
// next step is the board list 
// props are 
const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const onInputChange = (event) => {
        console.log(event);
        console.log(event.target.name);
        setTitle(event.target.value);
    }
    const onInputChangeOwner = (event) => {
        console.log(event);
        console.log(event.target.name);
        setOwner(event.target.value);
    }

    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
      // POST 'localhost:3000'
        if (title !== '') {
            props.onSubmitCallback(title);
        }
        if (owner !== '') {
            props.onSubmitCallback(owner);
        }
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Title</label>
        <input name="title-input" id="title-input" value={title} onChange={onInputChange} />
        <label>Owner's Name </label>
        <input name="owner-input" id="owner-input" value={owner} onChange={onInputChangeOwner} />
        {/*<button>Submit</button>*/}
        <input type="submit" />
    </form>
    )
}

export default NewBoardForm;