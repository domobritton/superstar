import React, { Component } from 'react';
import { Avatar } from 'gitstar-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_AVATAR = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`;

export default class UserAvatar extends Component {
  render() {
    if (!localStorage.getItem('token')) {
      return <Avatar {...this.props} />;
    }
    return (
      <Query query={GET_AVATAR}>
        {({ loading, error, data }) => {
          if (loading) return <Avatar {...this.props} />;
          if (error) {
            return <div>:(</div>;
          }

          return <Avatar url={data.viewer.avatarUrl} {...this.props} />;
        }}
      </Query>
    );
  }
}
