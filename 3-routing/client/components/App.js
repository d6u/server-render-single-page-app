import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import NavBar from './NavBar';
import TagsList from './TagsList';
import ReposList from './ReposList';
import User from './User';

class Dashboard extends Component {
  render() {
    const {tags, repos} = this.props.route;

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
    const {user} = this.props.route;

    return (
      <div className='app__inside'>
        <NavBar/>
        <User user={user}/>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} repos={this.props.repos} tags={this.props.tags}/>
        <Route path='/user' component={UserProfile} user={this.props.user}/>
      </Router>
    );
  }
}
