import './App.css';
import React, { useState, useEffect } from 'react';

// Import Components
import TodoList from './components/Todo/TodoList';
import Form from './components/Form/Form';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filterStatus, setFilterStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState(todos);

	//run useEffect on page load and run the loadLocalStorage function to get data from localStorage
	useEffect(() => {
		loadLocalStorage();
	}, []);

	//useEffect
	useEffect(() => {
		filterTodos(filterStatus);
		saveLocalStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterStatus, todos]);

	//Functions
	const filterTodos = (filter) => {
		switch (filter) {
			case 'active':
				return setFilteredTodos(
					todos.filter((todo) => todo.complete === false),
				);
			case 'completed':
				return setFilteredTodos(todos.filter((todo) => todo.complete === true));
			default:
				return setFilteredTodos(todos);
		}
	};

	// Save to localStorage anf check if there is a storage already or not
	const saveLocalStorage = () => {
		// check if the local storage has todos already or not
		if (
			localStorage.getItem('todos') === null ||
			localStorage.getItem('todos') === undefined
		) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	// Load from localStorage
	const loadLocalStorage = () => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			setTodos(todos);
		}
	};

	//Render
	return (
		<div className="App">
			<h1 className="Header">Todos App!😂</h1>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setFilterStatus={setFilterStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			/>

			{/* Project Description */}
			<div className="ProjectDescription">
				<p>
					TodosApp is a simple todo list app made with React and Redux. It use
					React Hooks to keep the state of the app.
					<br />
				</p>
				<a href="https://github.com/daptheHuman/task-app">
					Source Code
					<i className="fa fa-github"></i>
					Made by daptheHuman
				</a>
			</div>
		</div>
	);
};

export default App;
