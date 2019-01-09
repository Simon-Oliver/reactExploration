import React from 'react';
import './App.css';

class ToDoListItem extends React.Component {
  state = {
    ...this.props.item
  };

  handleInputChange = e => {
    const { completed } = this.state;
    this.setState({ completed: !completed });
  };

  render() {
    const { completed, title } = this.state;
    return (
      <div className="itemContainer">
        <input
          name="todoItem"
          type="checkbox"
          checked={completed}
          onChange={this.handleInputChange}
        />
        <h3 key={title}>{title}</h3>
      </div>
    );
  }
}

export default ToDoListItem;
