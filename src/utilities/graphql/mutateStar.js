import gql from 'graphql-tag';

export const ADD_STAR = gql`
  mutation AddStar($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation RemoveStar($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
