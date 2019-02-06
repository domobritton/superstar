import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Search } from './Search';

afterEach(cleanup);

test('<Search />', () => {
  const { container } = render(<Search />);
  expect(container.firstChild).toMatchSnapshot();
});
