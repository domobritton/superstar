import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { Form } from './SearchStyle';

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
