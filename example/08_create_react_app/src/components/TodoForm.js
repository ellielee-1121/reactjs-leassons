import React, { Component } from 'react';

class TodoForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const text = this.input.value;
    this.input.value = '';
    this.props.addItem(text);
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={input => (this.input = input)} />
      </form>
    );
  }
}

export default TodoForm;
