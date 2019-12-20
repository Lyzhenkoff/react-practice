import React from "react";

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label = 'Learn React'
                important /></li>
            <li><TodoListItem label = 'Creat a project' /></li>
        </ul>
)
};
export default TodoList;