import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const User = ({ submitForm, updateUser }) => {
  return (
    <Page>
      <Box>
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
        <div>
          View your starred Github repositories. <br />
          Search for and star new repos.
        </div>
      </Box>
    </Page>
  );
};

User.propTypes = {
  submitForm: PropTypes.func,
  updateUser: PropTypes.func,
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 90vh;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
`;

const Box = styled(Paper)`
  width: 450px;
  padding: 5%;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: 90%;
  padding: 40px 5%;
  height: 60px;
`;
