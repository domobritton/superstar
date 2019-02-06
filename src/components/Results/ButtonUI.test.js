import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { ApolloProvider } from 'react-apollo';
import ButtonUI from './ButtonUI';

afterEach(cleanup);

const clientMock = jest.fn();

test('<ButtonUI />', () => {
  const { getByTestId, container } = render(
    <ApolloProvider client={{}}>
      <ButtonUI />
    </ApolloProvider>
  );

  const starButton = getByTestId('mutate');

  expect(container.firstChild).toMatchSnapshot();
  expect(starButton.textContent).toBe('STAR');
});
