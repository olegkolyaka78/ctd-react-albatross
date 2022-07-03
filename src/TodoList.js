import React from 'react';
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "Create an empty array"
  },
  {
    id: 2,
    title: "Enter 3 objects into the array"
  },
  {
    id: 3,
    title: "Complete an assignment"
  },

];

const TodoList = () => (
    <ul>    
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo}/>
        ))}
    </ul>
  );

export default TodoList;