import React, { Component } from 'react';

class Search extends Component {  
  constructor(props) {
  super(props);
  this.state = {search: null};
  this.searchChange = this.searchChange.bind(this);
}

  searchChange(event) {
    this.setState({search: event.target.value});
    this.props.searchRequest(this.state.search);
  }

  render() {
    return (
      <div>
        <input 
          onChange={ this.searchChange.bind(this) }
          className="search"
          placeholder="Search"
          type="text"              
        />
      </div>
    );
  }
}

export default Search;