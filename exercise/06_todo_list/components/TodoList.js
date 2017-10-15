var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        { text: 'buy1', done: true },
        { text: 'buy2', done: false },
      ],
    };
  },
  addItem: function (text) {
    var item = {
      text: text,
      done: false,
    };
    this.setState({
      list: this.state.list.concat(item),
    });
  },
  render: function () {
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem}/>

        <ul className="todo-items">
        {
          this.state.list.map(function (item, index) {
              return (
                    <TodoItem done={item.done}>
                      {index + 1} . {item.text}
                    </TodoItem>
                  );
          })
        }
        </ul>
      </div>
    );
  },
});
