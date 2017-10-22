import React, { Component } from 'react';

class FBApp extends Component {
  state = {
    status: 'loading',
  }

  componentDidMount() {
    FB.init({
      appId: '1743219825918021',
      xfbml: false,
      version: 'v2.10',
    });
    FB.getLoginStatus(this.loginStatus);
  }

  getElement = () => {
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
        return <Profile logout={this.logout} />;
    }
  }

  login = () => {
    this.setState({ status: 'loading' });
    FB.login(this.loginStatus);
  }

  logout = () => {
    this.setState({ status: 'loading' });
    FB.logout(this.loginStatus);
  }

  loginStatus = (rs) => {
    if (rs.status === 'connected') {
      this.setState({ status: 'connected' });
    } else {
      this.setState({ status: 'not-connected' });
    }
  }

  render() {
    return (
      <div className="app">
        {this.getElement()}
      </div>
    );
  }
}

export default FBApp;
