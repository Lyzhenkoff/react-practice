import React from 'react';

const TodoListItem = ({ label , important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    return <span className='search' style ={style}>{ label }</span>
}
export default TodoListItem;
