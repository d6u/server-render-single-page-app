import React, {Component} from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import NavBar from './NavBar';
import TagsList from './TagsList';
import ReposList from './ReposList';
import User from './User';

class Dashboard extends Component {
  render() {
    return (
      <div className='app__inside'>
        <NavBar/>
        <TagsList/>
        <ReposList/>
      </div>
    );
  }
}

class UserProfile extends Component {
  render() {
    return (
      <div className='app__inside'>
        <NavBar/>
        <User/>
      </div>
    );
  }
}

export default (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Dashboard}/>
      <Route path='user' component={UserProfile}/>
      <Redirect from='other' to='/'/>
    </Route>
  </Router>
);
