import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Select } from './SelectionBarStyle';

export const SelectionBar = ({ handleChange, value }) => (
  <AppBar position="static" color="default">
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
    >
      <Select label="View My Stars" />
      <Select label="Search By User" />
      <Select label="Search By Repo" />
    </Tabs>
  </AppBar>
);

SelectionBar.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.number,
};
