import React, { Component } from 'react';

class Todo extends Component {

  handleClick = (event) => {
    event.preventDefault()
    let action = {
      type: 'DELETE_TODO',
      id: this.props.id
    }
    this.props.store.dispatch(action)
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleClick}> Delete Todo </button>
      </li>
    );
  }
};

export default Todo
