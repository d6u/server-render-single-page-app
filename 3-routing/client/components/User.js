import React, {Component} from 'react';

export default class User extends Component {
  render() {
    const {user = {}} = this.props;

    return (
      <div className='user app__user'>
        <img src={user.avatar} className='user__profile-pic'/>
        <h2 className='user__display-name'>{user.displayname}</h2>
      </div>
    );
  }
}
