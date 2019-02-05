import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withApollo, Query } from 'react-apollo';

import { SEARCH_QUERY } from '../../utilities/graphql/search';
import { USER_QUERY } from '../../utilities/graphql/user';
import { varSwitch } from '../../utilities/switch';
import { ResultsItems } from './ResultsItems';

import Grid from '@material-ui/core/Grid';
import { Page, Count, Name } from './ResultsStyle';

const Results = ({ search, value }) => {
  const vars = varSwitch(search, value, SEARCH_QUERY, USER_QUERY);
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

export default withApollo(Results);
