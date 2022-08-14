import React from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) =>
    setTimeout(
      () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }),
      2000
    ))
    .then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
      //reject({ data: { todoList: initialStories } })
  }, []);

  React.useEffect(() => {
    if (isLoading === false) {

    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const removeTodo = (task) => {
    const newTodoList = todoList.filter(
      (todoTask) => task.todoItemID !== todoTask.todoItemID
    );
    setTodoList(newTodoList);
  };

  function addTodo(newTodo) {

    setTodoList([...todoList, newTodo]);

  }
    
    return (
    <>
      <h1>Todo List: </h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
    );
}
 
export default App;