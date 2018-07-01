import React, { Component } from 'react';
import Header__logo from './Header__logo';
import Header__nav from './Header__nav';
import Header__content from './Header__content';
import Header__anchorbtn from './Header__anchorbtn';
import './style.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Header__logo />
        <Header__nav />
        <Header__content />
        <Header__anchorbtn />
      </div>
    );
  }
}

export default Header;