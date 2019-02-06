import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { ApolloProvider } from 'react-apollo';
import Results from './Results';

afterEach(cleanup);

const clientMock = jest.fn();

test('<Results />', () => {
  const { container } = render(
    <ApolloProvider client={{}}>
      <Results />
    </ApolloProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
