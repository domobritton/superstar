import React from 'react';
import PropTypes from 'prop-types';
import { withApollo, Mutation } from 'react-apollo';
import { ADD_STAR, REMOVE_STAR } from '../../utilities/graphql/mutateStar';
import { STARS_QUERY } from '../../utilities/graphql/starsQuery';

import Button from '@material-ui/core/Button';
import { Star } from './ButtonUIStyle';

// rewrite to DRY up code
const ButtonUI = ({ id, starred }) => {
  const starColor = starred ? { color: 'gold' } : { color: 'white' };
  return (
    <div>
      {starred ? (
        <Mutation
          mutation={REMOVE_STAR}
          variable={{ input: id }}
          refetchQueries={[{ query: STARS_QUERY }]}
        >
          {(removeStar, { data }) => (
            <Button
              data-testid={'mutate'}
              onClick={e => {
                e.preventDefault();
                removeStar({
                  variables: { input: { starrableId: id } },
                });
              }}
              variant="contained"
              color="primary"
              style={{ width: 120 }}
            >
              <Star style={starColor} />
              UNSTAR
            </Button>
          )}
        </Mutation>
      ) : (
        <Mutation
          mutation={ADD_STAR}
          variable={{ input: id }}
          refetchQueries={[{ query: STARS_QUERY }]}
        >
          {(addStar, { data }) => (
            <Button
              data-testid={'mutate'}
              onClick={e => {
                e.preventDefault();
                addStar({
                  variables: { input: { starrableId: id } },
                });
              }}
              variant="contained"
              color="primary"
              style={{ width: 120 }}
            >
              <Star style={starColor} />
              STAR
            </Button>
          )}
        </Mutation>
      )}
    </div>
  );
};

ButtonUI.propTypes = {
  Id: PropTypes.number,
  starred: PropTypes.bool,
};

export default withApollo(ButtonUI);
