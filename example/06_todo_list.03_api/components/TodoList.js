axios.defaults.withCredentials = true;

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [],
    };
  },

  componentDidMount: function () {
    axios.get(this.props.url).then(this.setList);
  },

  addItem: function (text) {
    axios.post(this.props.url, { text: text }).then(this.setList);
  },

  toggleItem: function (id) {
    axios.put(this.props.url + id).then(this.setList);
  },

  setList: function (response) {
    this.setState({ list: response.data });
  },

  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {
            this.state.list.map(function (item) {
              return (
                <TodoItem
                  id={item.id}
                  done={item.done}
                  key={item.id}
                  toggleItem={toggleItem}
                >
                  {item.text}
                </TodoItem>
              );
            })
          }
        </ul>
      </div>
    );
  },
});
