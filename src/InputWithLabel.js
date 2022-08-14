import React from 'react';

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
            />
        </>
    );
    };

export default InputWithLabel;