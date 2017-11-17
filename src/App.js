import React, {Component} from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import './App.css';

class App extends Component {

  render() {
    return (
      <dev>
        <SearchForm/>
        <SearchResult/>
      </dev>
    );
  }
}

export default App;
