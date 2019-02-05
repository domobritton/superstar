import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const Search = ({ text, updateSearch, value }) => {
  const placeholder =
    value === 0 ? 'Enter username' : 'What will you star today?';
  return (
    <Form
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <TextField
        label={text}
        placeholder={placeholder}
        fullWidth
        onChange={updateSearch}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Form>
  );
};

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
