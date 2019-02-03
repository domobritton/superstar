import React, { Component } from 'react';
import gql from 'graphql-tag';
import { qraphql, Query, withApollo } from 'react-apollo';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

import styled from 'styled-components';

// will need logic for text field to search for repos by organization or by user

const SearchRepoQuery = gql`
  query FindRepo($query: String!) {
    search(first: 10, query: $query, type: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
            description
            url
            primaryLanguage {
              color
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
class Search extends Component {
  state = {
    value: 0,
    text: 'View My Stars',
  };

  handleChange = (event, value) => {
    debugger;
    this.setState({ value, text: event.target.innerText });
  };

  render() {
    const { value, text } = this.state;
    return (
      <>
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="View My Stars" />
              <Tab label="Search By Repository" />
              <Tab label="Search By Organization" />
            </Tabs>
          </AppBar>
        </div>
        <Form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            label={text}
            placeholder="What will you star today?"
            fullWidth
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
