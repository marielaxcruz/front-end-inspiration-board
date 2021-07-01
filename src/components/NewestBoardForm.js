import PropTypes from 'prop-types';
import  React, { useState } from 'react';
//import './NewestBoardForm.css'


const NewestBoardForm = (props) => {
        const [title, setTitle] = useState('');
        const [owner, setOwner] = useState('');

    const onInputChange = (event) => {
        console.log(event);
        console.log(event.target.name);
        setTitle(event.target.value);
        setOwner(event.target.value);
    }

    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
      // POST 'localhost:3000'
        if (title !== ''){
            props.onSubmitCallback(title);
        }
        if (owner !== ''){
            props.onSubmitCallback(owner)
        }
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Title</label>
        <input title="title-input" id="title-input" value={title} onChange={onInputChange} />
        {/*<button>Submit</button>*/}
        <input type="submit" />
    </form>
    )
}


export default NewestBoardForm;