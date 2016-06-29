import React, {Component} from 'react';
import DashboardIcon from './dashboard-icon.svg';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='nav app__nav'>
        <a className='nav__btn'><DashboardIcon/></a>
      </nav>
    );
  }
}
