import React, {Component} from 'react';
import SearchForm from './SearchForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-6">
            <SearchForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
