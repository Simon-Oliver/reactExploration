import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoListItem = ({ title, id, handleInputChange, completed, handleDelete }) => (
  <div className="itemContainer">
    <input
      name="inputItem"
      type="checkbox"
      checked={completed}
      onChange={() => handleInputChange(id)}
    />
    <h3 key={title}>{title}</h3>
    <button className="delete" type="button" onClick={() => handleDelete(id)}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);

export default ToDoListItem;
