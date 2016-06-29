import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='nav app__nav'>
        <a className='nav__btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/>
          </svg>
        </a>
      </nav>
    );
  }
}
