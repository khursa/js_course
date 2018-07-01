import React, { Component } from 'react';
import Portfolio__title from './Portfolio__title';
import Portfolio__subtitle from './Portfolio__subtitle';
import Portfolio__circle from './Portfolio__circle';
import Portfolio__filter from './Portfolio__filter';
import './style.css'

class Portfolio__info extends Component {
  render() {
    return (
      <div className="portfolio__info">
        <Portfolio__title />
        <Portfolio__subtitle />
        <Portfolio__circle />
        <Portfolio__filter />
      </div>
    );
  }
}

export default Portfolio__info;