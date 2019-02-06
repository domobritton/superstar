import React from 'react';
import PropTypes from 'prop-types';
import { STATUS, Avatar } from 'gitstar-components';

import superStar from '../../superstar.svg';

import StarRate from '@material-ui/icons/StarRate';
import { Wrapper, Logo, Logout } from './HeaderStyle';

export const Header = ({ logout, status }) => {
  return (
    <Wrapper>
      <Logo>
        <StarRate />
        <img src={superStar} alt="superstar" />
      </Logo>
      <Avatar
        style={{
          marginLeft: 'auto',
          transform: `scale(${status === STATUS.AUTHENTICATED ? '1' : '0'})`,
        }}
      />
      <Logout onClick={logout} data-testid="logout">
        LOGOUT
      </Logout>
    </Wrapper>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.string,
};
