import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, Mutation } from 'react-apollo';

import { ADD_STAR, REMOVE_STAR } from '../../utilities/graphql/star';

import Button from '@material-ui/core/Button';
import StarRate from '@material-ui/icons/StarRate';
import styled from 'styled-components';

class ButtonUI extends Component {
  render() {
    const { id, starred } = this.props;
    const starColor = starred ? { color: 'gold' } : { color: 'white' };
    return (
      <div>
        {starred ? (
          <Mutation mutation={REMOVE_STAR} variable={{ input: id }}>
            {(removeStar, { data }) => (
              <Button
                onClick={e => {
                  e.preventDefault();
                  removeStar({
                    variables: { input: { starrableId: this.props.id } },
                  });
                }}
                variant="contained"
                color="primary"
                style={{ width: 120 }}
              >
                <Star style={starColor} />
                {console.log(data)}
                UNSTAR
              </Button>
            )}
          </Mutation>
        ) : (
          <Mutation mutation={ADD_STAR} variable={{ input: id }}>
            {(addStar, { data }) => (
              <Button
                onClick={e => {
                  e.preventDefault();
                  addStar({
                    variables: { input: { starrableId: this.props.id } },
                  });
                }}
                variant="contained"
                color="primary"
                style={{ width: 120 }}
              >
                <Star style={starColor} />
                {console.log(data)}
                STAR
              </Button>
            )}
          </Mutation>
        )}
      </div>
    );
  }
}

ButtonUI.propTypes = {
  Id: PropTypes.number,
  starred: PropTypes.bool,
};

const Star = styled(StarRate)`
  margin-right: auto;
`;

export default withApollo(ButtonUI);
