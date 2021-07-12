import React from 'react';
import './Form.css';

const Form = ({inputText, setInputText,todos,setTodos}) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };  
    const submitTextHandler = (event) => {
        event.preventDefault();
        setTodos([...todos,
            {
                // Do math random for id
                id: Math.floor(Math.random() * 100000),
                task: inputText,
                complete: false,

            }]);
        setInputText('');
    };
    return (
        <div className="Form">
        <input value={inputText} onChange={inputTextHandler} type="text" placeholder="What needs to be done?" />
        <button onClick={submitTextHandler}>Add</button>    
        </div>
    );
}

export default Form;