import React, {Component} from 'react';
import axios from 'axios'
import SearchResult from './SearchResult';

// import './SearchForm.css';

class SearchForm extends Component {
  state = {name: '', resultText: ''};

  async addDeta() {
    const response = await axios({
      method:'post',
      url:'http://127.0.0.1:5000/',
      data: {
        name: this.state.name,
      }
    });
    console.log(response);
    this.setState({resultText: response.data['name']});
  }

  handleChangeName = event =>  {
    this.setState({name: event.target.value});
  }

  handleSubmit = event => {
    this.addDeta();
    this.setState({name: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名前:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <input type="submit" value="検索" />
        <br/>
        <br/>
        <SearchResult name={this.state.name} resultText={this.state.resultText}/>
      </form>
    );
  }
}

export default SearchForm;
