import React, { Component } from 'react';
import About__boxes from './About__boxes';
import About__history from './About__history';
import Services from './Services';
import './style.css'

class About extends Component {
  render() {
    return (
      <div className="about" id="about us">
        <About__boxes />
        <About__history />
        <Services />
      </div>
    );
  }
}

export default About;