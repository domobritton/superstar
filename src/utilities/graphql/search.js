import gql from 'graphql-tag';

export const SEARCH_QUERY = gql`
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
