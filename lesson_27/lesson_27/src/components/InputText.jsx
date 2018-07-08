import React, { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {text: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
    this.props.updateData(this.state.text);
  }

  render() {
    return (
      <textarea 
        onChange={ this.handleChange.bind(this) }
        className="input_text"
        placeholder="Input text"
        rows="5"
        required
        >
      </textarea>
    );
  }
}

export default InputText;