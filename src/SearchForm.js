import React, {Component} from 'react';
import axios from 'axios'
// import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', mail: '',participants: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async addDeta() {
    const response = await axios({
      method:'post',
      url:'http://127.0.0.1:5000/',
      data: {
        name: this.state.name,
        mail: this.state.mail,
        participants: this.state.participants
      }
    });
    console.log(response);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.addDeta();
    this.setState({name: '', mail:'', participants: ''});
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
      </form>
    );
  }
}

export default SearchForm;
