import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo}) => (
    <li>
        {todo.title}
        <button type="button" onClick={() => onRemoveTodo(todo)}>
            Remove
        </button>
    </li>
);

export default TodoListItem;
