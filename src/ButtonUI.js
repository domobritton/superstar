import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { withApollo, Mutation } from 'react-apollo';

import Button from '@material-ui/core/Button';
import StarRate from '@material-ui/icons/StarRate';
import styled from 'styled-components';

// will need logic for button that will star and unstar repos
const AddStar = gql`
  mutation star($input: AddStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const RemoveStar = gql`
  mutation star($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export default class ButtonUI extends Component {
  state = {
    clicked: false,
    mutations: [AddStar, RemoveStar],
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  };
  render() {
    const { clicked, mutations } = this.state;
    const mutate = clicked ? mutations[0] : mutations[1];
    const starColor = clicked ? { color: 'gold' } : { color: 'white' };
    return (
      <Mutation>
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="primary"
          style={{ width: 120 }}
        >
          <Star style={starColor} />
          {clicked ? 'STAR' : 'UNSTAR'}
        </Button>
      </Mutation>
    );
  }
}

const Star = styled(StarRate)`
  margin-right: auto;
`;
