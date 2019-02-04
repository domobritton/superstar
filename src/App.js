import React, { Component } from 'react';

import { SelectionBar } from './SelectionBar';
import { Search } from './Search';
import Results from './Results';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    search: '',
    text: '',
    user: 'user:JOlivier92',
    value: 0,
  };

  componentDidMount() {
    const { user } = this.state;
    this.setState({ search: user });
  }

  handleChange = (event, value) => {
    const { user } = this.state;
    const text = event.target.innerText;
    let search = '';
    if (value === 0) {
      search = user;
    }
    this.setState({ search, value, text });
  };

  updateSearch = event => {
    const { value } = this.state;
    const key = value === 1 ? 'user' : 'name';
    this.setState({ search: `${key}:${event.target.value}` });
  };

  setValue = value => {
    this.setState({ value });
  };

  render() {
    const { search, text, value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SelectionBar value={value} handleChange={this.handleChange} />
        <Search text={text} updateSearch={this.updateSearch} value={value} />
        <Results search={search} />
      </div>
    );
  }
}
