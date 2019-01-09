import React from 'react';
import ToDoListItem from './ToDoListItem';
import { todos } from './dummydata';

const ToDoList = () => (
  <div>
    <h1>ToDo Overview</h1>
    {todos.map(todo => (
      <ToDoListItem item={todo} />
    ))}
  </div>
);

export default ToDoList;
