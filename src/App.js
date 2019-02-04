import React, { Component } from 'react';

import Header from './Header';
import { User } from './User';
import { SelectionBar } from './SelectionBar';
import { Search } from './Search';
import Results from './Results';

import styled from 'styled-components';

export default class App extends Component {
  state = {
    search: '',
    text: '',
    user: '',
    value: 0,
    login: false,
  };

  // button change
  handleChange = (event, value) => {
    const { user } = this.state;
    const text = event.target.innerText;
    let search = '';
    if (value === 0) {
      search = user;
    }
    this.setState({ search, value, text });
  };

  // set user
  updateUser = event => {
    const { value } = event.target;
    this.setState({ user: value });
  };

  // submit user
  submitForm = event => {
    event.preventDefault();
    const { user } = this.state;
    this.setState(prevState => ({
      login: !prevState.login,
      search: user,
    }));
  };

  // search query
  updateSearch = event => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  render() {
    const { login, search, text, value } = this.state;
    return (
      <AppPage>
        <Header />
        {!login ? (
          <User updateUser={this.updateUser} submitForm={this.submitForm} />
        ) : (
          <>
            <SelectionBar value={value} handleChange={this.handleChange} />
            <Search
              text={text}
              updateSearch={this.updateSearch}
              value={value}
            />
            <Results search={search} value={value} />
          </>
        )}
      </AppPage>
    );
  }
}

const AppPage = styled.div`
  text-align: center;
`;
