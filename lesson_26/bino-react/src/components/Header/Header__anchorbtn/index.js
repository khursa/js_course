import React, { Component } from 'react';
import './style.css'

class Header__anchorbtn extends Component {
  render() {
    return (
			<button class="header__anchorbtn">
				<div class="anchor_inner">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns="http://www.w3.org/1999/xlink" 
            width="26" 
            height="34" 
            viewBox="0 0 26 34"
          >
					<defs>
            <path 
              id="laita" 
              d="M970.93 988.97a.64.64 0 0 1-.57.35H969c-.5 3.5-3.46 7.06-6.78 8.24l.25.3c.18.23.2.54.04.78l-1.98 3.06a.64.64 0 0 1-1.08 0l-1.98-3.06a.67.67 0 0 1 .04-.77l.25-.31a11.08 11.08 0 0 1-6.78-8.24h-1.35a.64.64 0 0 1-.57-.35.67.67 0 0 1 .04-.67l2.5-3.78a.64.64 0 0 1 1.07 0l2.5 3.78a.64.64 0 1 1-.53 1.02h-1.23c.53 2.25 2.75 4.05 5.08 4.61v-14.46h-2a1 1 0 0 1-.99-1.02 1 1 0 0 1 1-1.02h1.03A3.73 3.73 0 0 1 960 971c2 0 3.64 1.66 3.64 3.71 0 1.08-.46 2.04-1.18 2.72h1.03a1 1 0 0 1 1 1.02 1 1 0 0 1-1 1.02h-2v14.46c2.34-.56 4.55-2.36 5.09-4.61h-1.24a.64.64 0 0 1-.57-.35.67.67 0 0 1 .04-.67l2.5-3.78a.64.64 0 0 1 1.07 0l2.51 3.78c.13.2.15.46.04.67zm-12.57-14.26c0 .93.73 1.68 1.64 1.68.9 0 1.64-.75 1.64-1.68 0-.92-.73-1.68-1.64-1.68-.9 0-1.64.76-1.64 1.68z"/>
          </defs>
            <g>
              <g transform="translate(-947 -969)">
                <use fill="#e74c3c" href="#laita"/>
              </g>
            </g>
			    </svg>
				</div>
			</button>
    );
  }
}

export default Header__anchorbtn;