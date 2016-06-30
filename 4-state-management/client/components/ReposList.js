import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRepos} from '../actions';
import Repo from './Repo';

class ReposList extends Component {
  componentDidMount() {
    this.props.dispatch(getRepos());
  }

  render() {
    const {repos} = this.props;

    return (
      <div className='repos-list app__repos'>
        {repos.map((repo) => <Repo key={repo.id} repo={repo}/>)}
      </div>
    );
  }
}

export default connect(({repos}) => ({repos}))(ReposList);
