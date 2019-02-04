import React, { Component } from 'react';

import Search from './Search';
import Results from './Results';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    search: 'user:domobritton',
  };

  updateSearch = event => {
    this.setState({ search: `user:${event.target.value}` });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Search updateSearch={this.updateSearch} />
        <Results search={search} />
      </div>
    );
  }
}
