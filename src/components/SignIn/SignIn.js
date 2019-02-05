import React from 'react';

import { STATUS } from 'gitstar-components';

import superStar from '../../superstar.svg';
import styled from 'styled-components';

export const SignIn = ({ status, CLIENT_ID, REDIRECT_URI }) => {
  return (
    <Page>
      <Logo src={superStar} alt="superstar" />
      {status === STATUS.INITIAL && (
        <Login
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          LOGIN
        </Login>
      )}
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: gray;
`;

const Logo = styled.img`
  width: 450px;
`;

const Login = styled.a`
  color: white;
  font-size: 22px;
  &:hover {
    text-decoration-line: none;
    color: gold;
  }
`;

export default SignIn;
