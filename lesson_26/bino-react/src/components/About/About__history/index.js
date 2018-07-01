import React, { Component } from 'react';
import history__img from './history__img.png';
import './style.css'

class About__history extends Component {
  render() {
    return (
      <div className="about__history">
        <div className="history__wrap">
          <div className="history__img">
            <img src={history__img} />
          </div>
          <div className="history__info">
            <History__title history__title="OUR HISTORY"/>
            <History__text  
            history__text__1="Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ip sum has been the 
            industry's standard dummy text ever since the 1500s, when an unk- nown 
            printer took a galley of type and scrambled it to make a type specimen book."
            history__text__2="It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum."
            />          
            <History__btn  history__btn="BROWSE OUR WORK"/>
          </div>
        </div>
      </div>
    );
  }
}

const History__title = (props) => {
  return (
     <h2 className="history__title">
        { props.history__title }     
    </h2>
  )
}

const History__text = (props) => {
  return (
    <div>
      <p className="history__text">
          { props.history__text__1 }     
      </p>
      <p className="history__text">
          { props.history__text__2 }     
      </p>
    </div>  
  )
}

const History__btn = (props) => {
  return (
     <button className="history__btn">
        { props.history__btn }     
    </button>
  )
}

export default About__history;