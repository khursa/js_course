import React, { Component } from 'react';

class Input_text extends Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    
  const modified_state = this.state.value;
    return (
      <textarea 
        value={this.state.value}
        onChange={() => { this.props.updateData(this.handleChange)}}
        // onChange={this.handleChange}
        className="input_text"
        placeholder="Input text"
        rows="5"
        minlength="1"
        maxlength="1000"
        required
        >
        {/* {console.log(modified_state)} */}

      </textarea>
    );
  }
}

export default Input_text;