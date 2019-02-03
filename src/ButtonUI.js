import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StarRate from '@material-ui/icons/StarRate';

import styled from 'styled-components';

// will need logic for button that will star and unstar repos

export default class ButtonUI extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  };
  render() {
    const { clicked } = this.state;
    const starColor = clicked ? { color: 'gold' } : { color: 'white' };
    return (
      <Button
        onClick={this.handleClick}
        variant="contained"
        color="primary"
        style={{ width: 120 }}
      >
        <Star style={starColor} />
        {clicked ? 'STAR' : 'UNSTAR'}
      </Button>
    );
  }
}

const Star = styled(StarRate)`
  margin-right: auto;
`;
