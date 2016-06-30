import React, {Component} from 'react';
import {connect} from 'react-redux';

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

class TagsList extends Component {
  render() {
    const {tags} = this.props;

    return (
      <div className='tags-list app__tags'>
        {tags.map((tag) => <Tag key={tag.id} tag={tag}/>)}
      </div>
    );
  }
}

export default connect(({tags}) => ({tags}))(TagsList);
