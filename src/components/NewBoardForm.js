import React, { useState } from 'react';

const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');

    const onInputChange = (event) => {
        console.log(event);
        console.log(event.target.name);
        setTitle(event.target.value);
    }

    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
      // POST 'localhost:3000'
        if (title !== '') {
            props.onSubmitCallback(title);
        }
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Title</label>
        <input name="title-input" id="title-input" value={title} onChange={onInputChange} />
        <label>Owner's Name </label>
        <input name="owner-input" id="owner-input" value={title} onChange={onInputChange} />
        <button>Submit</button>
        <input type="submit" />
    </form>
    )
}

export default NewBoardForm;