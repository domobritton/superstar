import gql from 'graphql-tag';

export const STARS_QUERY = gql`
  query {
    viewer {
      name
      starredRepositories(last: 30) {
        totalCount
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
