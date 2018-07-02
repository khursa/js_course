import React, { Component } from 'react';
import caseicon from './3.png';
import './style.css'

class Services__info extends Component {
  render() {
    return (
      <div className="case__info">
        <div className="decorblock">
        <Case__icon />
          <Services__title services__title="ACCUMULATE CREATIVE IDEAS"/>
          <Services__text1 services__text__1="Lorem Ipsum is simply dummy text of the printing and typesetting let. 
          Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. 
          Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let."/>
        </div>
      </div>
    );
  }
}

const Services__title = (props) => {
  return (
     <h2 className="case__title">
        { props.services__title }     
    </h2>
  )
}


const Case__icon = (props) => {
  return (

    <img src={caseicon} />
  )
}

const Services__subtitle__web = (props) => {
  return (
    <div>
      <p className="case__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Services__subtitle__print = (props) => {
  return (
    <div>
      <p className="case__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Services__subtitle__photo = (props) => {
  return (
    <div>
      <p className="case__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Services__text1 = (props) => {
  return (
     <p className="case__text--1">
        { props.services__text__1 }     
    </p>
  )
}

const Services__text2 = (props) => {
  return (
     <p className="case__text--2">
        { props.services__text__2 }     
    </p>
  )
}

const Services__text3 = (props) => {
  return (
     <p className="case__text--3">
        { props.services__text__3 }     
    </p>
  )
}

export default Services__info;