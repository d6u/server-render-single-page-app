import React, {Component} from 'react';
import Repo from './Repo';

export default class ReposList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getRepos().then((repos) => this.setState({repos}));;
  }

  render() {
    const repos = this.state.repos || this.props.repos || [];

    return (
      <div className='repos-list app__repos'>
        {repos.map((repo) => <Repo key={repo.id} repo={repo}/>)}
      </div>
    );
  }
}

function getRepos() {
  return fetch('/repos.json').then((response) => response.json());
}
