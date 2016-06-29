import React, {Component} from 'react';
import NavBar from './NavBar';
import TagsList from './TagsList';
import ReposList from './ReposList';

export default class App extends Component {
  render() {
    return (
      <div className='app__inside'>
        <NavBar/>
        <TagsList tags={this.props.tags}/>
        <ReposList repos={this.props.repos}/>
      </div>
    );
  }
}
