import React, {Component} from 'react';

axios.defaults.withCredentials = true;

class TodoList extends Component{
  constructor(){
    super();
    this.state ={
      list: [],
    }
  }
  componentDidMount() {
    axios.get(this.props.url).then(this.setList);
  }

  addItem = (text) =>{
    axios.post(this.props.url, { text: text }).then(this.setList);
  }

  toggleItem = (id)=>  {
   axios.put(this.props.url + id).then(this.setList);
  }

  setList= (response) =>{
    this.setState({ list: response.data });
  }

  render() {
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {this.state.list.map((item) => (              
                <TodoItem
                  id={item.id}
                  done={item.done}
                  key={item.id}
                  toggleItem={this.toggleItem}
                >
                  {item.text}
                </TodoItem>
              ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;