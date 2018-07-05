import React, { Component } from 'react';

class Output extends Component {

  state = {
    outputText: "Output text"
  };

  textOutput() {
    return {__html: this.state.outputText};
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