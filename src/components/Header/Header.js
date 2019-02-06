import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { STATUS, Avatar } from 'gitstar-components';

import superStar from '../../superstar.svg';

import StarRate from '@material-ui/icons/StarRate';
import { Wrapper, Logo, Logout } from './HeaderStyle';

const GET_AVATAR = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`;

export const Header = ({ logout, status }) => {
  return (
    <Wrapper>
      <Query query={GET_AVATAR}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error</div>;
          return (
            <>
              <Logo>
                <StarRate />
                <img src={superStar} alt="superstar" />
              </Logo>
              <Avatar
                style={{
                  borderRadius: '50%',
                  marginLeft: 'auto',
                  transform: `scale(${
                    status === STATUS.AUTHENTICATED ? '1' : '0'
                  })`,
                }}
                url={data.viewer.avatarUrl}
              />
              <Logout onClick={logout} data-testid="logout">
                LOGOUT
              </Logout>
            </>
          );
        }}
      </Query>
    </Wrapper>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.string,
};
