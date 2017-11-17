import React, {Component} from 'react';
import axios from 'axios'
// import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', mail: '',participants: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeParticipants = this.handleChangeParticipants.bind(this);
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

  handleChangeMail(event) {
    this.setState({mail: event.target.value});
  }

  handleChangeParticipants(event) {
    this.setState({participants: event.target.value});
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
          氏名:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <br/>
        <label>
          メアド:
          <input type="text" value={this.state.mail} onChange={this.handleChangeMail} />
        </label>
        <br/>
        <label>
          人数:
          <input type="text" value={this.state.participants} onChange={this.handleChangeParticipants} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
