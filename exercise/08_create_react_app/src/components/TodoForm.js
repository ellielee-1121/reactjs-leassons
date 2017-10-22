/* eslint-disable */
var TodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.input.value;
    this.input.value = '';
    this.props.addItem(text);
  },

  inputRef: function (input) {
    this.input = input;
  },

  render: function () {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef} />
      </form>
    );
  },
});
