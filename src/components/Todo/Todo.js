import React from 'react';

const Todo = ({keys,taskName,taskComplete,todo, todos,setTodos}) => {

    const deleteHandler = (id) => {
        //Its creating a new list, its iterating through the array and removing the elements that equal todo.id filter-logic.png-
        const newList= todos.filter(items => items.id !== todo.id)
        //Setting the new list to the setTodos prop
        setTodos(newList);
        console.log('Deleting task..');
    }

    const completeHandler = () => {
        //Iterating array todos with map and if the name equals to the item task make the complete to opposite value
        setTodos(todos.map(item => {
            if (item.task === todo.task) {
                return {
                    ...item,complete: !item.complete}
            }
            return item;
        }));    
    }
    return (
        <li className="list-group-item">
            <span className={taskComplete+" item"}>{taskName}</span>
            <button onClick={completeHandler} className="complete-btn">✔</button>
            <button onClick={() => deleteHandler(keys)} className="delete-btn">✖</button>
        </li>
    );
}

export default Todo;