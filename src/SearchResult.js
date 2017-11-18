import React, {Component} from 'react';

class SearchResult extends Component {

  render() {
    return (
      <div>
        name
        <br/>
        {this.props.name}
        <br/>
        resultText
        <br/>
        {this.props.resultText}
      </div>
    );
  }
}

export default SearchResult;
