import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withApollo, Query } from 'react-apollo';

import { SEARCH_QUERY } from '../../utilities/graphql/searchQuery';

import { ResultsItems } from './ResultsItems';

import Grid from '@material-ui/core/Grid';
import { Page, Count } from './ResultsStyle';

const Results = ({ search, value }) => {
  if (!search) return null;
  const key = value === 1 ? 'user' : 'repository';
  return (
    <Page>
      <Query
        query={SEARCH_QUERY}
        variables={{ queryString: `${key}:${search}` }}
      >
        {({ data, loading, error }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <Grid container spacing={24}>
              <Count>{data.search.repositoryCount} REPOSITORIES FOUND</Count>
              {data.search.edges.map(({ node }) => (
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
};

Results.propTypes = {
  search: PropTypes.string,
  value: PropTypes.number,
};

export default withApollo(Results);
