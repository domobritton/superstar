import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

export const User = ({ submitForm, updateUser }) => {
  return (
    <Page>
      <Form noValidate autoComplete="off" onSubmit={submitForm}>
        <TextField
          label="Sign In"
          placeholder="View your Github stars"
          fullWidth
          onChange={updateUser}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Form>
    </Page>
  );
};

User.propTypes = {
  submitForm: PropTypes.func,
  updateUser: PropTypes.func,
};

const Page = styled.div`
  flex-grow: 1;
  height: 100vh;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  padding: 40px 5%;
  height: 60px;
`;
