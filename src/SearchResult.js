import React, {Component} from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {resultText: ''}
  }

  render() {
    return (
      <textarea name="textField" rows="10" cols="40" readOnly={"readonly"}>
        {this.state.resultText}
      </textarea>
    );
  }
}

export default SearchResult;
