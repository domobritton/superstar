import React, { Component } from 'react';

import { SelectionBar } from './SelectionBar';
import { Search } from './Search';
import Results from './Results';

export default class Components extends Component {
  state = {
    login: false,
    text: '',
    search: 'domobritton',
    user: 'domobritton',
    value: 0,
  };
  // button change
  handleChange = (event, value) => {
    const { user } = this.state;
    const text = event.target.innerText;
    let search = '';
    if (value === 0) {
      search = user.slice();
    }
    this.setState({ search, value, text });
  };

  // search query
  updateSearch = event => {
    const { value } = event.target;
    this.setState({ search: value });
  };
  render() {
    const { search, text, value } = this.state;
    return (
      <div>
        <SelectionBar value={value} handleChange={this.handleChange} />
        <Search text={text} updateSearch={this.updateSearch} value={value} />
        <Results search={search} value={value} />
      </div>
    );
  }
}
