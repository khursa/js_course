import React, { Component } from 'react';
import Services__info from './Services__info';
import Services__bg from './Services__bg';
import './style.css'

class Case__description extends Component {
  render() {
    return (
      <div className="case">
        <Services__info />
        <Services__bg />
      </div>
    );
  }
}

export default Case__description;