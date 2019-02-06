import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Header } from './Header';

afterEach(cleanup);

const mockFn = jest.fn();

test('<Header />', () => {
  const { getByTestId, container } = render(<Header logout={mockFn} />);
  const logoutButton = getByTestId('logout');

  expect(container.firstChild).toMatchSnapshot();
  expect(logoutButton.tagName).toBe('BUTTON');
  expect(logoutButton.textContent).toBe('LOGOUT');
  fireEvent.click(logoutButton);
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toBeCalledTimes(1);
});
