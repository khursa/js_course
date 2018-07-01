import React, { Component } from 'react';
import './style.css'

class Portfolio__filter extends Component {
  render() {
    return (
      <p className="portfolio__filter">
        <a href="#">
          ALL
        </a>
        <span>
          / 
        </span>
        <a href="#">
        PRINT DESIGN 
        </a>
        <span>
          / 
        </span>
        <a href="#">
        ANIMATION
        </a>
        <span>
          / 
        </span>
        <a href="#">
        ART
        </a>
        <span>
          / 
        </span>
        <a href="#">
        WEB DESIGN 
        </a>
        <span>
          / 
        </span>
        <a href="#">
        PHOTOGRAPHY
        </a>
        <span>
          / 
        </span>
        <a href="#">
        VIDEO
        </a>
      </p>
    );
  }
}

export default Portfolio__filter;