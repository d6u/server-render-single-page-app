import React, {Component} from 'react';
import {Route, IndexRoute, Redirect} from 'react-router'
import NavBar from './NavBar';
import TagsList from './TagsList';
import ReposList from './ReposList';
import User from './User';

class Dashboard extends Component {
  render() {
    const {tags, repos} = typeof __data__ !== 'undefined' ? __data__ : this.props.routes;

    return (
      <div className='app__inside'>
        <NavBar/>
        <TagsList tags={tags}/>
        <ReposList repos={repos}/>
      </div>
    );
  }
}

class UserProfile extends Component {
  render() {
    const {user} = typeof __data__ !== 'undefined' ? __data__ : this.props.routes;

    return (
      <div className='app__inside'>
        <NavBar/>
        <User user={user}/>
      </div>
    );
  }
}

export default (
  <Route path='/'>
    <IndexRoute component={Dashboard}/>
    <Route path='user' component={UserProfile}/>
    <Redirect from='other' to='/'/>
  </Route>
);
