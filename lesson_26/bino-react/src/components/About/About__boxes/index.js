import React, { Component } from 'react';
import design from './icon-design.png'
import code from './icon-code.png'
import ideas from './icon-ideas.png'
import support from './icon-support.png'
import './style.css'

class About__boxes extends Component {
  render() {
    return (
      <div className="about__boxes">
      <div className="box">
        <div className="img__wrap">
          <img src={design} />
        </div>
          <Box__title__design
            title_design="SLEEK DESIGN"
          />
          <Box__info box__info="Lorem Ipsum is simply 
          dummy text of the printing and typesetting 
          let. Lorem Ipsum has been the industry." />
        </div>
        <div className="box">
          <div className="img__wrap">
            <img src={code} />
          </div>
            <Box__title__code
              title_code="CLEAN CODE"
            />
            <Box__info box__info="Lorem Ipsum is simply 
            dummy text of the printing and typesetting 
            let. Lorem Ipsum has been the industry." />
          </div>
        <div className="box">
          <div className="img__wrap">
            <img src={ideas} />
          </div>
            <Box__title__ideas
              title_ideas="CREATIVE IDEAS"
            />
            <Box__info box__info="Lorem Ipsum is simply 
            dummy text of the printing and typesetting 
            let. Lorem Ipsum has been the industry." />
          </div>
        <div className="box">
          <div className="img__wrap">
            <img src={support} />
          </div>
            <Box__title__support
              title_support="FREE SUPPORT"
            />
            <Box__info box__info="Lorem Ipsum is simply 
            dummy text of the printing and typesetting 
            let. Lorem Ipsum has been the industry." />
          </div>
      </div>
    );
  }
}

const Box__title__design = (props) => {
  return (
     <h3 className="box__title">
        { props.title_design }     
    </h3>
  )
}

const Box__title__code = (props) => {
  return (
     <h3 className="box__title">
        { props.title_code }     
    </h3>
  )
}

const Box__title__ideas = (props) => {
  return (
     <h3 className="box__title">
        { props.title_ideas }     
    </h3>
  )
}

const Box__title__support = (props) => {
  return (
     <h3 className="box__title">
        { props.title_support }     
    </h3>
  )
}

const Box__info = (props) => {
  return (
     <p className="box__info">
        { props.box__info }     
    </p>
  )
}

export default About__boxes;