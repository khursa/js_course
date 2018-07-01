import React, { Component } from 'react';
import './style.css'

class Services__info extends Component {
  render() {
    return (
      <div className="services__info">
        <Services__title services__title="OUR SERVICES"/>
        <Services__subtitle__web  subtitle__web ="WEB DESIGN"/>
        <Services__text services__text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
        Lorem Ip sum has been the industry's standard dummy text ever."/>
        <Services__subtitle__print  subtitle__print ="PRINT DESIGN"/>
        <Services__text services__text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
        Lorem Ip sum has been the industry's standard dummy text ever."/>
        <Services__subtitle__photo  subtitle__photo ="PHOTOGRAPHY"/>
        <Services__text services__text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
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

const Services__text = (props) => {
  return (
     <p className="services__text">
        { props.services__text }     
    </p>
  )
}

export default Services__info;