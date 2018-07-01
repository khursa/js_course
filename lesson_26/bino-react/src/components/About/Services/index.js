import React, { Component } from 'react';
import Services__info from './Services__info';
import Services__bg from './Services__bg';
import './style.css'

class Services extends Component {
  render() {
    return (
      <div className="services">
        <Services__info />
        <Services__bg />
      </div>
    );
  }
}

export default Services;