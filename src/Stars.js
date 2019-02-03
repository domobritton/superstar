import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { graphql } from 'react-apollo';

const myStars = gql`
  {
    user(login: "domobritton") {
      id
      name
      email
      starredRepositories(
        first: 10
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        edges {
          node {
            id
            name
            description
            createdAt
          }
        }
      }
    }
  }
`;

const Stars = ({ loading, error, user }) => {
  if (loading) return 'Loading...';
  if (error) return `Error!`;
  return (
    <div>
      <ul>
        {user.starredRepositories.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <li>{node.createdAt}</li>
            <li>{node.name}</li>
            <li>{node.description}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default graphql(myStars, { props: ({ data }) => ({ ...data }) })(
  withApollo(Stars)
);
