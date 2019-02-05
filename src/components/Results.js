import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { withApollo, Query } from 'react-apollo';

import { ResultsItems } from './ResultsItems';

import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const SearchQuery = gql`
  query($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, last: 30) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            nameWithOwner
            description
            viewerHasStarred
            url
            primaryLanguage {
              color
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
// owner?
const UserQuery = gql`
  query($user: String!) {
    user(login: $user) {
      id
      name
      starredRepositories(last: 30) {
        edges {
          node {
            id
            nameWithOwner
            description
            viewerHasStarred
            url
            primaryLanguage {
              color
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const varSwitch = (search, value, SearchQuery, UserQuery) => {
  let variables, query;
  let key = '';
  if (search.length > 0) {
    key = value === 1 ? 'user' : 'name';
  }
  if (value === 0) {
    query = UserQuery;
    variables = { user: search };
    return [query, variables];
  } else {
    query = SearchQuery;
    variables = { queryString: `${key}:${search}` };
    return [query, variables];
  }
};

const Results = ({ search, value }) => {
  const vars = varSwitch(search, value, SearchQuery, UserQuery);
  return (
    <Page>
      <Query query={vars[0]} variables={vars[1]}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <Grid container spacing={24}>
              {value !== 0 ? (
                <>
                  <Count>
                    {data.search.repositoryCount} REPOSITORIES FOUND
                  </Count>
                  {data.search.edges.map(({ node }) => (
                    <Fragment key={node.id}>
                      <ResultsItems node={node} />
                    </Fragment>
                  ))}
                </>
              ) : (
                <>
                  <Name>{data.user.name}</Name>
                  {data.user.starredRepositories.edges.map(({ node }) => (
                    <Fragment key={node.id}>
                      <ResultsItems node={node} />
                    </Fragment>
                  ))}
                </>
              )}
            </Grid>
          );
        }}
      </Query>
    </Page>
  );
};

Results.propTypes = {
  search: PropTypes.string,
  value: PropTypes.number,
};

const Page = styled.div`
  flex-grow: 1;
  padding: 0 5%;
`;

const Count = styled.div`
  margin-left: 20px;
  font-size: 22px;
  height: 30px;
  color: gray;
  letter-spacing: 6px;
  font-weight: 700;
`;

const Name = styled(Count)``;

// const myQuery = graphql(SearchQuery, { props: ({ data }) => ({ ...data }) });
// export default myQuery(withApollo(Results));

export default withApollo(Results);
