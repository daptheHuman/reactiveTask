import React from 'react';
import './Todo.css';

const Todo = ({ taskName, taskComplete, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		//Its creating a new list, its iterating through the array and removing the elements that equal todo.id filter-logic.png-
		const newList = todos.filter((items) => items.id !== todo.id);
		//Setting the new list to the setTodos prop
		setTodos(newList);
		console.log('Deleting task..');
	};

	const completeHandler = () => {
		//Iterating array todos with map and if the name equals to the item task make the complete to opposite value
		setTodos(
			todos.map((item) => {
				if (item.task === todo.task) {
					return {
						...item,
						complete: !item.complete,
					};
				}
				return item;
			}),
		);
	};

	return (
		<li className="Todo list-group">
			<i className="fa fa-pencil"></i>
			<span className={taskComplete + ' item'}>{taskName}</span>
			<div className="actions">
				<button onClick={completeHandler} className="complete-btn">
					<i className="fa fa-check"></i>
				</button>
				<button onClick={deleteHandler} className="delete-btn">
					<i className="fa fa-times"></i>
				</button>
			</div>
		</li>
	);
};

export default Todo;
