import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { SignIn } from './SignIn';

afterEach(cleanup);

test('<SignIn />', () => {
  const { container } = render(<SignIn />);
  expect(container.firstChild).toMatchSnapshot();
});
