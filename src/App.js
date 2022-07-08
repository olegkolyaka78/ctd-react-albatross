import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {

    setTodoList([...todoList, newTodo]);

  }
    
    return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList}/>
      <AddTodoForm onAddTodo={addTodo} />
    </div>
    );
}
 
export default App;