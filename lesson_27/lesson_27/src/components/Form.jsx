import React, { Component } from 'react';
import Search from './Search.jsx';
import Input_text from './Input_text.jsx';
import Output from './Output.jsx';

class Form extends Component {

  updateData = (value) => {
    this.setState({ text: value })
 }

  render() {
    return (
      <form class="form">
        <Search />
        <div className="input-output">
          <Input_text updateData={this.updateData} />
          {console.log(this.state)}
          <Output />
        </div>
      </form>
    );
  }
}

export default Form;