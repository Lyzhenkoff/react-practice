import React from "react";

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
    const element = todos.map ((item) => {
        return (
            <li key={item.id}>
                <TodoListItem {...item}/>
            </li>
        )
    });
    return (

        <ul>
            { element }
        </ul>
    )
};
export default TodoList