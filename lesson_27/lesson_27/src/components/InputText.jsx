import React, { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <textarea 
        onChange={() => { this.props.updateData(this.handleChange) }}
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