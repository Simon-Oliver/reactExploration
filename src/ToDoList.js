import React from 'react';
import uniqid from 'uniqid';
import ToDoListItem from './ToDoListItem';
import todos from './dummydata';

class ToDoList extends React.Component {
  state = {
    todos
  };

  updateTodo = event => {
    event.preventDefault();
    console.log(this.state.todos);
  };

  handleInput = e => {
    const newItem = {
      id: uniqid(),
      title: e.target.value,
      completed: false
    };

    this.setState({ items: this.state.todos.push(newItem) });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h1>ToDo Overview</h1>
        <form onSubmit={this.updateTodo}>
          <input onChange={this.handleInput} placeholder="Task" />
          <button type="submit"> Add Task </button>
        </form>
        {todos.map(todo => (
          <ToDoListItem item={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default ToDoList;
