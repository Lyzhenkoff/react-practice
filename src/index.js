import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', impportant: false},
        {label: 'Learn React', important: true},
        {label: 'Create a react-project', important: false}
    ];
    return (
        < div >
        < AppHeader />
        < SearchPanel />
        < TodoList
            todos = {todoData}
        />
    < /div>
)
};

ReactDOM.render( < App />, document.getElementById('root')
)
