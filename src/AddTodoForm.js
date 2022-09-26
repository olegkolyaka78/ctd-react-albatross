import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './TodoListItem.module.css';
import { ReactComponent as Add } from './green-add-button-12011.svg';

const AddTodoForm = ({ onAddTodo }) => {

    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    } 

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({title: todoTitle, todoItemID: Date.now()});
        setTodoTitle('');
    }

    return (
        <div>
            <form onSubmit={handleAddTodo} className={style.label}>
                <InputWithLabel
                    todoItemID="todoTitle"
                    value={todoTitle}
                    onInputChange={handleTitleChange}
                >
                    Title: 
                </InputWithLabel>
                    <button type="submit" className={style.buttonAdd}>
                        <Add height="60" width="60" />
                    </button>
            </form>
        </div>
    );
}

export default AddTodoForm;