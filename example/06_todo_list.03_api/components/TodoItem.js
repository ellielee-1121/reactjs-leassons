var TodoItem = React.createClass({
  onClick: function () {
    this.props.toggleItem(this.props.id);
  },

  render: function () {
    var className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  },
});
