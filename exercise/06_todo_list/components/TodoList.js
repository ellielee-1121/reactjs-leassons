axios.defaults.withCredentials = true;

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
      ],
    };
  },
  componentDidMount: function () {
    axios.get(this.props.url).then(this.setList);
  },
  setList: function (response) {
    this.setState({ list: response.data });
  },
  addItem: function (text) {
    axios.post(this.props.url, { text: text }).then(this.setList);
    // var item = {
    //   id: this.state.list.length + 1,
    //   text: text,
    //   done: false,
    // };
    // this.setState({
    //   list: this.state.list.concat(item),
    // });
  },
  toggleItem: function (id) {
    axios.put(this.props.url + id).then(this.setList);
    // var list = this.state.list.map(function (item) {
    //   return item.id !== id ? item : { id: item.id, text: item.text, done: !item.done };
    // });
    // this.setState({
    //   list: list,
    // });
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem}/>

        <ul className="todo-items">
        {
          this.state.list.map(function (item, index) {
              return (
                    <TodoItem id={item.id} done={item.done} toggleItem={toggleItem}>
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
