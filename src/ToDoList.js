import React from 'react';
import uniqid from 'uniqid';
import ToDoListItem from './ToDoListItem';
import todos from './dummydata';

class ToDoList extends React.Component {
  state = {
    todos,
    newTodo: '',
    error: ''
  };

  handleInputChange = id => {
    const updatedTodoList = this.state.todos;
    updatedTodoList.forEach(e => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
    });
    this.setState({ todos: updatedTodoList });
  };

  updateTodo = event => {
    event.preventDefault();
    const newItem = {
      id: uniqid(),
      title: this.state.newTodo,
      completed: false
    };

    if (event.target.elements.option.value) {
      this.setState(prevState => ({ todos: prevState.todos.concat(newItem) }));
      this.setState(() => ({ newTodo: '', error: '' }));
      event.target.elements.option.value = '';
    } else {
      this.setState(() => ({ error: 'Please enter a valid ToDo item!' }));
    }
  };

  handleInput = e => {
    const newValue = e.target.value.trim();
    this.setState(() => ({ newTodo: newValue }));
  };

  handleDelete = id => {
    this.setState(prevState => ({ todos: prevState.todos.filter(e => e.id !== id) }));
  };

  removeCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(e => e.completed !== true)
    }));
  };

  render() {
    return (
      <div>
        <h1>ToDo Overview</h1>
        <form className="addTodo" onSubmit={this.updateTodo}>
          <input
            className="todoInput"
            name="option"
            onChange={this.handleInput}
            placeholder="Task"
          />
          <div className="btn-box">
            <button className="addTaskBtn" type="submit">
              Add Task
            </button>
            <button type="button" onClick={this.removeCompleted}>
              Remove Completed
            </button>
          </div>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.todos.length > 0 ? (
          this.state.todos.map(todo => (
            <ToDoListItem
              id={todo.id}
              key={todo.id}
              completed={todo.completed}
              title={todo.title}
              handleInputChange={this.handleInputChange}
              handleDelete={this.handleDelete}
            />
          ))
        ) : (
          <p>Please enter an Item to get started</p>
        )}
      </div>
    );
  }
}

export default ToDoList;
