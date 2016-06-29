import React, {Component} from 'react';

export default class Repo extends Component {
  render() {
    const {repo} = this.props;
    const [, authorName, repoName] = /(.+)\/(.+)/.exec(repo.full_name);

    return (
      <div className='repo'>
        <div className='repo__full-name'>
          <a className='repo__name-link' target='_blank' href={repo.html_url}>
            <span className='repo__repo-name'>{repoName}</span>
            <span className='repo__author-name'> / {authorName}</span>
          </a>
        </div>
        <div className='repo__desc'>{repo.description}</div>
      </div>
    );
  }
}
