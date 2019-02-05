import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const Search = ({ text, updateSearch, value }) => (
  <Form
    noValidate
    autoComplete="off"
    onSubmit={e => {
      e.preventDefault();
    }}
  >
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

Search.propTypes = {
  text: PropTypes.string,
  updateSearch: PropTypes.func,
  value: PropTypes.number,
};

const Form = styled.form`
  display: flex;
  padding: 40px 5%;
  height: 160px;
`;
