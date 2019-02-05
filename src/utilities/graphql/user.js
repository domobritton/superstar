import gql from 'graphql-tag';

export const USER_QUERY = gql`
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
