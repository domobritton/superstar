import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const SelectionBar = ({ handleChange, value }) => {
  return (
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
};

const Select = styled(Tab)`
  span {
    font-size: 17px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
