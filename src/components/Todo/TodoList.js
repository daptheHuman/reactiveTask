import React from 'react';
import './TodoList.css';

//Import Components
import Todo from './Todo';

const TodoList = ({todos,setTodos}) => {
    return (    
        <div className="TodoList">
            <ul className="List">
                {todos.map(todo =>(
                    <Todo 
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    keys={todo.id}
                    taskName={todo.task}
                    taskComplete={todo.complete ? "strike" : ""}
                    // true = done, false = not done
                    />      
                    ))}
            </ul>
        </div>
    )
}

export default TodoList;
