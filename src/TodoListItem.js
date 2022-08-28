import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo}) => (
    <li>
        {todo.fields.Title}
        <button type="button" onClick={() => onRemoveTodo(todo)}>
            Remove
        </button>
    </li>
);

export default TodoListItem;
