import React from 'react';
import uniqid from 'uniqid';
import ToDoListItem from './ToDoListItem';
import todos from './dummydata';

class ToDoList extends React.Component {
  state = {
    todos,
    newTodo: ''
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

    this.setState(prevState => ({ todos: prevState.todos.concat(this.state.newTodo) }));
    this.setState(() => ({ newTodo: '' }));
  };

  handleInput = e => {
    const newItem = {
      id: uniqid(),
      title: e.target.value,
      completed: false
    };

    this.setState(() => ({ newTodo: newItem }));
  };

  render() {
    return (
      <div>
        <h1>ToDo Overview</h1>
        <form onSubmit={this.updateTodo}>
          <input onChange={this.handleInput} placeholder="Task" />
          <button type="submit"> Add Task </button>
        </form>
        {this.state.todos.map(todo => (
          <ToDoListItem
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            title={todo.title}
            handleInputChange={this.handleInputChange}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
