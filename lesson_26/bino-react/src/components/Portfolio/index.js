import React, { Component } from 'react';
import Portfolio__info from './Portfolio__info';
import Portfolio__gallery from './Portfolio__gallery';
import './style.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <Portfolio__info />
        <Portfolio__gallery />
      </div>
    );
  }
}

export default Portfolio;