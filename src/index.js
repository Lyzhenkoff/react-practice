import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

import './index.css';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', impportant: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Create a react-project', important: false, id: 3}
    ];
    return (
        < div className='index' >
        < AppHeader />
        < SearchPanel />
        < TodoList
            todos = {todoData}
        />
    < /div>
)};

ReactDOM.render( < App />, document.getElementById('root')
)
