import React from 'react';
import './Form.css';

const Form = ({inputText, setInputText,todos,setTodos}) => {
    //Handling on any text changes
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };  
    //Handling on submit into todos prop (useState)
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
            <form onSubmit={submitTextHandler}>
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="What needs to be done?" />
                <button onClick={submitTextHandler} type="submit">Add</button>  
            </form>  
        </div>
    );
}

export default Form;