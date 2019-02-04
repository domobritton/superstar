import React, { Component } from 'react';
import gql from 'graphql-tag';
import { qraphql, Query, withApollo } from 'react-apollo';

import { SelectionBar } from './SelectionBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

import styled from 'styled-components';
class Search extends Component {
  state = {
    value: 0,
    text: 'View My Stars',
    userName: '',
    search: '',
  };

  handleChange = (event, value) => {
    this.setState({ value, text: event.target.innerText });
  };

  render() {
    const { value, text } = this.state;
    const { updateSearch } = this.props;
    const placeholder =
      value === 0 ? 'Enter your username' : 'What will you star today?';
    return (
      <>
        <SelectionBar value={value} handleChange={this.handleChange} />
        <Form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            label={text}
            placeholder={placeholder}
            fullWidth
            onChange={updateSearch}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
          >
            <Arrow />
          </Button>
        </Form>
      </>
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 40px 5%;
`;

const Arrow = styled(ArrowForward)`
  color: white;
  font-size: 40px;
`;

export default Search;
