import React, { Component } from 'react';
import Search from './Search';
import InputText from './InputText';
import Output from './Output';

class Form extends Component {

  updateData = (value) => {
    this.setState({ text: value })
 }

  render() {
    return (
      <form className="form">
        <Search />
        <div className="input-output">
          <InputText updateData={ this.updateData.bind(this) } />
          <Output value={this.state} />
          {console.log(this.state)}
        </div>
      </form>
    );
  }
}

export default Form;