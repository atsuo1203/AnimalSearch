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
        <pre>{this.props.resultText}</pre>
      </div>
    );
  }
}

export default SearchResult;
