import React, { Component } from 'react';

class TodoForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const text = this.input.value;
    this.input.value = '';
    this.props.addItem(text);
  }

  inputRef = (input) => {
    this.input = input;
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef} />
      </form>
    );
  }
}

export default TodoForm;
