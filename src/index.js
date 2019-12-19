import React from 'react';
import ReactDOM from 'react-dom';
import {placeholder} from "@babel/types";

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Get a job of my dream</li>
        </ul>
    )
};

const AppHeader = () => {
    return(
        <h1>My Todo List</h1>
    )
};

const SearchPanel = () => {
    return(
    <input placeholder = 'search' />
)
};

const App = () => {
    return(
        <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))
