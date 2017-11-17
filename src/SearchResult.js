import React, {Component} from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'ンゴンゴ\nンゴンゴ\nンゴンゴ\nンゴンゴ\nンゴンゴ'};
  }

  render() {
    return (
      <textarea name="textField" rows="10" cols="40" readonly="readonly">
        {this.state.value}
      </textarea>
    );
  }
}

export default SearchResult;
