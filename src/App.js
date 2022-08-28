import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {

  const [todoList, setTodoList] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: { Authorization : `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      }
    })
    /*new Promise((resolve, reject) =>
    setTimeout(
      () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }),
      2000
    ))*/
    .then((response) => response.json())
    .then((result) => {
      setTodoList(result.records || []);
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

          <BrowserRouter>
              <Routes>
                <Route exact path="/" element={
                  <div>
                    <h1>Todo List: </h1>
                    <AddTodoForm onAddTodo={addTodo} />
                      {isLoading ? (
                        <p>Loading ...</p>
                        ) : (
                          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                          )}
                  </div>
                } />
                <Route path="/new" element={
                  <div>
                    <h1>New Todo List: </h1>
                  </div>
                } />
              </Routes>
          </BrowserRouter>
    );
}
 
export default App;