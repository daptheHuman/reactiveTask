import './App.css';
import React, {useState} from 'react';

// Import Components
import TodoList from './components/Todo/TodoList'
import Form from './components/Form/Form'

//import data.json
import data from './data.json';

const App = () => {
  const [inputText, setInputText] = useState('');

  const [todos, setTodos] = useState(data);

  return (
    <div className="App">
      <h1 className="Header">⚛Todo list app!😂</h1>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
