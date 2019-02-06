import React from 'react';
import PropTypes from 'prop-types';
import { withApollo, Mutation } from 'react-apollo';
import { ADD_STAR, REMOVE_STAR } from '../../utilities/graphql/mutateStar';
import { STARS_QUERY } from '../../utilities/graphql/starsQuery';

import { ButtonItem } from './ButtonItem';

const ButtonUI = ({ id, starred }) => {
  return (
    <div>
      {starred ? (
        <Mutation
          mutation={REMOVE_STAR}
          variable={{ input: id }}
          refetchQueries={[{ query: STARS_QUERY }]}
        >
          {(removeStar, { data, error }) => (
            <ButtonItem
              data={data}
              mutateStar={removeStar}
              starred={starred}
              id={id}
              text={'UNSTAR'}
            />
          )}
        </Mutation>
      ) : (
        <Mutation
          mutation={ADD_STAR}
          variable={{ input: id }}
          refetchQueries={[{ query: STARS_QUERY }]}
        >
          {(addStar, { data, error }) => (
            <ButtonItem
              data={data}
              error={error}
              mutateStar={addStar}
              starred={starred}
              id={id}
              text={'STAR'}
            />
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
