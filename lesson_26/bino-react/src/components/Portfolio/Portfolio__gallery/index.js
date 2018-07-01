import React, { Component } from 'react';
import img_1_1 from './1.jpg';
import img_1_2 from './2.jpg';
import img_1_3 from './3.jpg';
import img_1_4 from './4.jpg';
import img_2_1 from './5.jpg';
import img_2_2 from './6.jpg';
import img_2_3 from './7.jpg';
import img_2_4 from './8.jpg';
import './style.css'

class Portfolio__gallery extends Component {
  render() {
    return (
      <div className="portfolio__gallery">
      <div className="row1">
        <Box_1_1 />
        <Box_1_2 />
        <Box_1_3 />
        <Box_1_4 />
      </div>
      <div className="row2">
        <Box_2_1 />
        <Box_2_2 />
        <Box_2_3 />
        <Box_2_4 />
      </div>
      </div>
    );
  }
}

const Box_1_1 = (props) => {
  return (
     <div className="box-1-1"> 
      {/* <img src={ img_1_1 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_1_2 = (props) => {
  return (
     <div className="box-1-2"> 
      {/* <img src={ img_1_2 } /> */}
      <div className="overlay">
          <p className="overlay__text--main">
            T-SHIRT DESIGN
          </p>
          <p className="overlay__text--secondary">
            art / t-shirt
          </p>      
      </div>
    </div>
  )
}

const Box_1_3 = (props) => {
  return (
     <div className="box-1-3"> 
      {/* <img src={ img_1_3 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_1_4 = (props) => {
  return (
     <div className="box-1-4"> 
      {/* <img src={ img_1_4 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_2_1 = (props) => {
  return (
     <div className="box-2-1"> 
      {/* <img src={ img_2_1 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_2_2 = (props) => {
  return (
     <div className="box-2-2"> 
      {/* <img src={ img_2_2 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_2_3 = (props) => {
  return (
     <div className="box-2-3"> 
      {/* <img src={ img_2_3 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

const Box_2_4 = (props) => {
  return (
     <div className="box-2-4"> 
      {/* <img src={ img_2_4 } /> */}
      <div className="overlay">
        <p className="overlay__text--main">
          T-SHIRT DESIGN
        </p>
        <p className="overlay__text--secondary">
          art / t-shirt
        </p>
      </div>
    </div>
  )
}

export default Portfolio__gallery;