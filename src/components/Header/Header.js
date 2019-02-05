import React from 'react';
import { STATUS, Avatar } from 'gitstar-components';

import superStar from '../../superstar.svg';

import StarRate from '@material-ui/icons/StarRate';
import styled from 'styled-components';

export const Header = ({ logout, status, CLIENT_ID, REDIRECT_URI }) => {
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
      {status === STATUS.INITIAL ? (
        <Login
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          LOGIN
        </Login>
      ) : (
        <Logout onClick={logout}>LOGOUT</Logout>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: gray;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.div`
  height: 60px;
  svg {
    animation: logo-spin infinite 20s linear;
    font-size: 60px;
    color: gold;
    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  img {
    height: 60px;
  }
`;

const Login = styled.a`
  display: inline;
  color: white;
  font-size: 22px;
  &:hover {
    text-decoration-line: none;
    color: gold;
  }
`;

const Logout = styled.button`
  display: inline;
  background: transparent;
  color: white;
  font-size: 22px;
  border: none;
  outline: none;
`;
