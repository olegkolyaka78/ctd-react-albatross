import React from 'react';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo}) => (
    <li className={style.ListItem}>
        <span style={{ width: '29%'}}>
            {todo.fields.Title}
        </span>
        <div>
        <button type="button" onClick={() => onRemoveTodo(todo)} className={style.button}>
            x  
        </button>
        </div>
    </li>
);

export default TodoListItem;
