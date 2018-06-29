import React, { Component } from 'react';
import './style.css'

class Nav__list extends Component {
  render() {
    return (
      <ul className="nav__list">
        <Nav__item 
          link_1="HOME"
          link_2="ABOUT US"
          link_3="PORTFOLIO"
          link_4="PRICING"
          link_5="TEAM"
          link_6="BLOG"
          link_7="CONTACT"            
        />
      </ul>
    );
  }
}

const Nav__item = (props) => {
  return (
     <ul>
        <li>
          <a 
            id="nav__link--active"
            href={ '#' + props.link_1.toLowerCase() }
            title={ props.link_1 }
          >
           { props.link_1 }
          </a>
        </li>        
        <li>
          <a 
            href={ '#' + props.link_2.toLowerCase() }
            title={ props.link_2 }
          >
           { props.link_2 }
          </a>
        </li>        
        <li>
          <a 
            href={ '#' + props.link_3.toLowerCase() }
            title={ props.link_3 }
          >
           { props.link_3 }
          </a>
        </li>        
        <li>
          <a 
            href={ '#' + props.link_4.toLowerCase() }
            title={ props.link_4 }
          >
           { props.link_4 }
          </a>
        </li>        
        <li>
          <a 
            href={ '#' + props.link_5.toLowerCase() }
            title={ props.link_5 }
          >
           { props.link_5 }
          </a>
        </li>        
        <li>
          <a 
            href={ '#' + props.link_6.toLowerCase() }
            title={ props.link_6 }
          >
           { props.link_6 }
          </a>
        </li>
        <li>
          <a 
            href={ '#' + props.link_7.toLowerCase() }
            title={ props.link_7 }
          >
           { props.link_7 }
          </a>
        </li>
    </ul>
  )
}

export default Nav__list;