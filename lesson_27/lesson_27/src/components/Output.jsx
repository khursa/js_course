import React, { Component } from 'react';
import Input_text from './Input_text.jsx';

class Output extends Component {

  state = {
    value: "Input text..."
  };

  textOutput() {
    return {__html: this.state.value};
  }

  render() {
    return (
      <div className="output"
           dangerouslySetInnerHTML={this.textOutput()}
      >
        
      </div>
    );
  }
}

export default Output;