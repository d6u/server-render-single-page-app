import React, {Component} from 'react';

export default class TagsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getTags().then((tags) => this.setState({tags}));
  }

  render() {
    const {tags = []} = this.state;

    return (
      <div className='tags-list app__tags'>
        {tags.map((tag) => <Tag key={tag.id} tag={tag}/>)}
      </div>
    );
  }
}

class Tag extends Component {
  render() {
    const {tag} = this.props;

    const style = {
      backgroundColor: tag.background_color,
      color: tag.foreground_color,
    };

    return (
      <div className='tags-list__tag' style={style}>{tag.text}</div>
    );
  }
}

function getTags() {
  return fetch('/tags.json').then((response) => response.json());
}
