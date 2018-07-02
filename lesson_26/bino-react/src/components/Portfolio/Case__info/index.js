import React, { Component } from 'react';
import Portfolio__title from './Portfolio__title';
import Portfolio__subtitle from './Portfolio__subtitle';
import Portfolio__circle from './Portfolio__circle';
import './style.css'

class Case__info extends Component {
  render() {
    return (
      <div className="portfolio__info">
        <Portfolio__title />
        <Portfolio__subtitle />
        <Portfolio__circle />
      </div>
    );
  }
}

export default Case__info;