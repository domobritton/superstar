import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from .env if it exists
  // WORKS BUT IS PERSONAL ACCESS TOKEN
  // const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
  // SAME THING ALSO WORKS PAT
  const token = `2ad69e9c0dcec5216828b78812efca1611deb8ed`;
  // ACCESS TOKEN THROUGH USER AUTH RETURNED FROM GITHUB DOESNT WORK
  // const token = `cffdd6812bdcd7cb1608924deb5c5f2667589623`;
  // SAME THING AS ABOVE JUST PULLED FROM localStorage DOESNT WORK
  // const token = localStorage.getItem('token');
  // console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
