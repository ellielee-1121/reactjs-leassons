var api = 'https://randomuser.me/api/?results=100';

var UserList = React.createClass({
  getInitialState: function () {
    return {
      users: [],
      num: 100,
    };
  },

  componentDidMount: function () {
    this.getList();
  },

  getList: function () {
    var self = this;

    fetch(this.props.api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        self.setState({
          users: data.results,
        });
      });
  },
  toggle: function () {
    this.setState({
      num: this.state.num === 100 ? 3 : 100,
    });
  },
  render: function () {
    var users = this.state.users.slice(0, this.state.num);
    return (
      <div>
      <button onClick={this.getList}> Refresh</button>
      <button onClick={this.toggle}> toggle</button>
      {users.map(function (user) {
        return (
          <div>
            <img src={user.picture.thumbnail}/>
            <h3>{user.name.first}{user.name.last}</h3>
            <h5>{user.email}</h5>
          </div>
        );
      })}
      </div>
    );
  },
});

ReactDOM.render(
  <UserList api={api}/>,
  document.getElementById('app')
);
