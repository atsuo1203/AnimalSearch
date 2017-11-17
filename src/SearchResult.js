import React, {Component} from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {resultText: 'ンゴンゴ\nンゴンゴ\nンゴンゴ\nンゴンゴ\nンゴンゴ'};
  }

  render() {
    return (
      <textarea name="textField" rows="10" cols="40" readonly="readonly">
        {this.state.resultText}
      </textarea>
    );
  }
}

export default SearchResult;
