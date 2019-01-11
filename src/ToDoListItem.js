import React from 'react';
import './App.css';

const ToDoListItem = ({ title, id, handleInputChange, completed, handleDelete }) => (
  <div className="itemContainer">
    <input
      name="inputItem"
      type="checkbox"
      checked={completed}
      onChange={() => handleInputChange(id)}
    />
    <h3 key={title}>{title}</h3>
    <button type="button" onClick={() => handleDelete(id)}>
      Remove
    </button>
  </div>
);

export default ToDoListItem;
