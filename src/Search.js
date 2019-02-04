import React from 'react';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const Search = ({ text, updateSearch, value }) => (
  <Form noValidate autoComplete="off">
    {value !== 0 && (
      <TextField
        label={text}
        placeholder="What will you star today?"
        fullWidth
        onChange={updateSearch}
        InputLabelProps={{
          shrink: true,
        }}
      />
    )}
  </Form>
);

const Form = styled.form`
  display: flex;
  padding: 40px 5%;
  height: 60px;
`;
