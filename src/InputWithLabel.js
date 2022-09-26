import React from 'react';
import style from './TodoListItem.module.css';

const InputWithLabel = ({
    todoItemID,
    value,
    type = 'type',
    name = 'title',
    onInputChange,
    children,    
}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor={todoItemID}>{children}</label>
            &nbsp;
            <input
                id={todoItemID}
                type={type}
                name={name}
                value={value}
                onChange={onInputChange}
                ref={inputRef}
                className={style.input}
                placeholder="Enter todo item"
            />
        </>
    );
    };

export default InputWithLabel;