import React, {Component} from 'react';

class SearchResult extends Component {

  render() {
    return (
      <div>
        {this.props.resultText}
      </div>
    );
  }
}

export default SearchResult;
