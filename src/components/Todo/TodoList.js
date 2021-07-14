import React from 'react';
import './TodoList.css';

//Import Components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="TodoList">
			{/* Render Todos */}
			<ul className="List">
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
						taskName={todo.task}
						taskComplete={todo.complete ? 'strike' : ''}
						// true = done, false = not done
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
