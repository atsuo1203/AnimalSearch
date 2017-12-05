import React, {Component} from 'react';
import axios from 'axios'
import _ from 'lodash'
import SearchResult from './SearchResult';
import 'spectre.css';

// import './SearchForm.css';

class SearchForm extends Component {
  state = {name: '',resultName:'', resultText: []};

  async addDeta() {
    const response = await axios({
      method:'post',
      url:'https://animal-searcher.herokuapp.com/',
      data: {
        name: this.state.name,
      }
    });
    console.log(response);
    this.setState({resultText: _.trim(response.data['name']).split("\n")});
  }

  handleChangeName = event =>  {
    this.setState({name: event.target.value});
    this.setState({resultName: event.target.value});
  }

  handleSubmit = event => {
    if (this.state.name !== '') {
      this.addDeta();
      this.setState({name: ''});
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <label className="form-label">
          名前
          <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-input"/>
        </label>
        <input type="submit" value="検索"  className="form-input"/>
        <br/>
        <br/>
        <SearchResult resultName={this.state.resultName} resultText={this.state.resultText}/>
      </form>
    );
  }
}

export default SearchForm;
