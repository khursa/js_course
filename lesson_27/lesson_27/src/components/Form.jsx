import React, { Component } from 'react';
import Search from './Search';
import InputText from './InputText';
import Output from './Output';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      searchText: ""
    };
  };

  updateData = (value) => {
    this.setState({ 
      text: value,
      outputText: value
    });
 };

  searchRequest = (value) => {
    this.setState({ 
      search: value,
      searchText: value
    });
  };

  illumination() {
    
  }

  render() {
    return (
      <form className="form">
        <Search searchRequest={ this.searchRequest.bind(this) } />
        <div className="input-output">
          <InputText updateData={ this.updateData.bind(this) } />
          <Output value={ this.state.outputText } />

          { console.log(this.state) }

        </div>
      </form>
    );
  }
}

export default Form;