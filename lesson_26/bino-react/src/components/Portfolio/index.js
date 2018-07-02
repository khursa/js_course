import React, { Component } from 'react';
import Portfolio__info from './Portfolio__info';
import Portfolio__gallery from './Portfolio__gallery';
import Case__info from './Case__info';
import Case__description from './Case__description';
import './style.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <Portfolio__info />
        <Portfolio__gallery />
        <Case__info />
        <Case__description />
      </div>
    );
  }
}

export default Portfolio;