import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { SelectionBar } from './SelectionBar';

afterEach(cleanup);

test('<SelectionBar />', () => {
  const { container } = render(<SelectionBar />);
  expect(container.firstChild).toMatchSnapshot();
});
