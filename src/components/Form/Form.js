import React from 'react';
import './Form.css';

const Form = ({
	inputText,
	setInputText,
	todos,
	setTodos,
	setFilterStatus,
}) => {
	//Handling on any text changes
	const inputTextHandler = (event) => {
		setInputText(event.target.value);
	};
	//Handling on submit into todos prop (useState)
	const submitTextHandler = (event) => {
		event.preventDefault();
		setTodos([
			...todos,
			{
				// Do math random for id
				id: Math.floor(Math.random() * 100000),
				task: inputText,
				complete: false,
			},
		]);
		setInputText('');
		console.log('Adding a task');
	};
	// handler filter function for all,active,completed todos
	const filterStatusHandler = (event) => {
		setFilterStatus(event.target.value);
	};

	// handler delete function for deleting all todos lists
	const deleteAllHandler = (event) => {
		event.preventDefault();
		setTodos([]);
	};

	return (
		<div className="Form">
			<form onSubmit={submitTextHandler}>
				<input
					value={inputText}
					onChange={inputTextHandler}
					type="text"
					placeholder="What needs to be done?"
				/>
				<button onClick={submitTextHandler} type="submit">
					<i className="fa fa-plus"></i>
				</button>
				{/* Make a select box for All, Active, Completed */}
				<select className="Form__filterStatus" onChange={filterStatusHandler}>
					<option value="all">All</option>
					<option value="active">Active</option>
					<option value="completed">Completed</option>
				</select>
				{/* trash button to clear all todos */}
				<button className="Form__trash" onClick={deleteAllHandler}>
					<i className="fa fa-trash"></i>
				</button>
			</form>
		</div>
	);
};

export default Form;
