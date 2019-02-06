import React, { Fragment } from 'react';
import { withApollo, Query } from 'react-apollo';

import { STARS_QUERY } from '../../utilities/graphql/starsQuery';

import { ResultsItems } from './ResultsItems';

import Grid from '@material-ui/core/Grid';
import { Page, Name } from './ResultsStyle';

const Stars = () => (
  <Page>
    <Query query={STARS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Grid container spacing={24}>
            <Name>{data.viewer.name}</Name>
            {data.viewer.starredRepositories.edges.map(({ node }) => (
              <Fragment key={node.id}>
                <ResultsItems node={node} />
              </Fragment>
            ))}
          </Grid>
        );
      }}
    </Query>
  </Page>
);

export default withApollo(Stars);
