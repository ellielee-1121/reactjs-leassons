var App = React.createClass({
  getInitialState: function () {
    return {
      status: 'loading',
    };
  },

  componentDidMount: function () {
    FB.init({
      appId: '1743219825918021',
      xfbml: false,
      version: 'v2.10',
    });
    FB.getLoginStatus(this.loginStatus);
  },

  login: function () {
    this.setState({ status: 'loading' });
    FB.login(this.loginStatus);
  },

  logout: function () {
    this.setState({ status: 'loading' });
    FB.logout(this.loginStatus);
  },

  loginStatus: function (rs) {
    if (rs.status === 'connected') {
      this.setState({ status: 'connected' });
    } else {
      this.setState({ status: 'not-connected' });
    }
  },

  getElement: function () {
    switch (this.state.status) {
      case 'loading':
        return (
          <img className="loading" src="img/fb-loading.gif" />
        );

      case 'not-connected':
        return (
          <button className="login" onClick={this.login} >
            Connect Facebook
          </button>
        );

      case 'connected':
      default:
        return <Profile logout={this.logout}/>;
    }
  },

  render: function () {
    return (
      <div className="app">
        {this.getElement()}
      </div>
    );
  },
});
