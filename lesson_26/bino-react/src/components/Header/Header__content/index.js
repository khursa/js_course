import React, { Component } from 'react';
import Header__subtitle from './Header__subtitle';
import Header__title from './Header__title';
import Header__circle from './Header__circle';
import Header__info from './Header__info';
import Header__btn from './Header__btn';
import './style.css'

class Header__content extends Component {
  render() {
    return (
      <div className="header__content">
        <Header__subtitle />
        <Header__title />
        <Header__circle />
        <Header__info />
        <Header__btn />
      </div>
    );
  }
}

export default Header__content;