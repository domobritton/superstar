import React from 'react';

import { STATUS } from 'gitstar-components';

import superStar from '../../superstar.svg';
import { Page, Logo, Login } from './SignInStyle';

export const SignIn = ({ status, CLIENT_ID, REDIRECT_URI }) => {
  return (
    <Page>
      <Logo src={superStar} alt="superstar" />
      {status === STATUS.INITIAL && (
        <Login
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
        >
          LOGIN
        </Login>
      )}
    </Page>
  );
};
