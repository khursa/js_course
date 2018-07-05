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
          <InputText sendData={this.getData} updateData={this.updateData} />
          {console.log(this.state)}
          <Output value={this.props.value} />
        </div>
      </form>
    );
  }
}

export default Form;