import React from 'react';
import FB from 'fb';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 'img/anonymous.jpg',
      name: '',
    };
  }

  componentDidMount() {
    FB.api('/me', { fields: ['picture.width(240)', 'name'] }, this.profileGet);
  }

  profileGet = (rs) => {
    this.setState({
      picture: rs.picture.data.url,
      name: rs.name,
    });
  }

  render() {
    const { logout } = this.props;
    const { picture, name } = this.state;
    return (
      <div className="profile">
        <img className="picture" src={picture} />
        <div className="name">{name}</div>
        <button onClick={logout}>登出</button>
      </div>
    );
  }
}

export default Profile;
