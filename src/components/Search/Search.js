import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { Form } from './SearchStyle';

export const Search = ({ text, updateSearch, value }) => {
  return (
    <>
      {value === 0 ? (
        <Form />
      ) : (
        <Form
          noValidate
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <TextField
            label={text}
            placeholder="What will you star today?"
            fullWidth
            onChange={updateSearch}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Form>
      )}
    </>
  );
};

Search.propTypes = {
  text: PropTypes.string,
  updateSearch: PropTypes.func,
  value: PropTypes.number,
};
