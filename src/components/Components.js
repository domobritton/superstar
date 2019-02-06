import React, { Component } from 'react';

import { SelectionBar } from './Selection/SelectionBar';
import { Search } from './Search/Search';
import Results from './Results/Results';
import Stars from './Results/Stars';

export default class Components extends Component {
  state = {
    text: '',
    search: '',
    value: 0,
  };
  // button change
  handleChange = (event, value) => {
    const text = event.target.innerText;
    this.setState({ value, text });
  };

  // search query
  updateSearch = event => {
    const search = event.target.value;
    this.setState({ search });
  };
  render() {
    const { search, text, value } = this.state;
    return (
      <>
        <SelectionBar value={value} handleChange={this.handleChange} />
        <Search text={text} updateSearch={this.updateSearch} value={value} />
        {value === 0 ? <Stars /> : <Results search={search} value={value} />}
      </>
    );
  }
}
