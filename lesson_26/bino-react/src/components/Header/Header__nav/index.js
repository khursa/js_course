import React, { Component } from 'react';
import Nav__list from './Nav__list';
import './style.css'

class Header__nav extends Component {
  render() {
    return (
      <nav className="header__nav">
          <Nav__list />
      </nav>
    );
  }
}

export default Header__nav;