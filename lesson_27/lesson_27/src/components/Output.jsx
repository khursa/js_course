import React, { Component } from 'react';

class Output extends Component {

  textOutput() {
    return { __html: this.props.value };
  }

  render() {
    return (
      <div className="output"
           dangerouslySetInnerHTML={ this.textOutput() }
      >
      
      </div>
    );
  }
}

export default Output;