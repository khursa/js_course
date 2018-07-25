import React, { Component } from 'react';
import Search from './Search';
import InputText from './InputText';
import Output from './Output';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "",
      // searchText: ""
    };
  };

  searchRequest = (value) => {
    this.setState({ 
      search: value,
      searchText: value
    });
  };

  updateData = (value) => {
    this.setState({ 
      text: value,
      outputText: value
    });
 };

  illumination() {
    let fullText = this.state.text;
    let partText = this.state.searchText;
    let re = new RegExp(partText);
    let substitution = `<span>${partText}</span>`;
    let result;

    if ( re.test(fullText) ) {
      result = fullText.replace(re, substitution);

      this.setState({ 
        outputText: result,
        resultText: result
      });
    }

    return this.state.outputText

  }

  render() {
    return (
      <form className="form">
        <Search searchRequest={ this.searchRequest.bind(this) } />
        <div className="input-output">
          <InputText updateData={ this.updateData.bind(this) } />
          <Output value={ this.state.outputText } />
          
          { console.log(this.state) }
          {/* { console.log(this.illumination()) } */}

        </div>
      </form>
    );
  }
}

export default Form;