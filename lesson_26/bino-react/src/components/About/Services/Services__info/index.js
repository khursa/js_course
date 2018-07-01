import React, { Component } from 'react';
import './style.css'

class Services__info extends Component {
  render() {
    return (
      <div className="services__info">
        <Services__title services__title="OUR SERVICES"/>
        <Services__subtitle__web  subtitle__web ="WEB DESIGN"/>
        <Services__text1 services__text__1="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
        Lorem Ip sum has been the industry's standard dummy text ever."/>
        <Services__subtitle__print  subtitle__print ="PRINT DESIGN"/>
        <Services__text2 services__text__2="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
        Lorem Ip sum has been the industry's standard dummy text ever."/>
        <Services__subtitle__photo  subtitle__photo ="PHOTOGRAPHY"/>
        <Services__text3 services__text__3="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
        Lorem Ip sum has been the industry's standard dummy text ever."/>
      </div>
    );
  }
}

const Services__title = (props) => {
  return (
     <h2 className="services__title">
        { props.services__title }     
    </h2>
  )
}

const Services__subtitle__web = (props) => {
  return (
    <div>
      <p className="services__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Services__subtitle__print = (props) => {
  return (
    <div>
      <p className="services__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Services__subtitle__photo = (props) => {
  return (
    <div>
      <p className="services__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Services__text1 = (props) => {
  return (
     <p className="services__text--1">
        { props.services__text__1 }     
    </p>
  )
}

const Services__text2 = (props) => {
  return (
     <p className="services__text--2">
        { props.services__text__2 }     
    </p>
  )
}

const Services__text3 = (props) => {
  return (
     <p className="services__text--3">
        { props.services__text__3 }     
    </p>
  )
}

export default Services__info;