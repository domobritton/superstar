import React from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StarRate from '@material-ui/icons/StarRate';

import styled from 'styled-components';

// user(login: ) switch to variable to allow user to see their own starred repos

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
            nameWithOwner
            description
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

const Stars = ({ classes, loading, error, user }) => {
  if (loading) return 'Loading...';
  if (error) return `Error!`;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {user.starredRepositories.edges.map(({ node }) => (
          <Grid key={node.id} item xs={12}>
            <Paper className={classes.paper}>
              <Repo>{node.nameWithOwner}</Repo>
              <Description>{node.description}</Description>
              <Box>
                Language
                <Language style={{ color: `${node.primaryLanguage.color}` }}>
                  {node.primaryLanguage.name}
                </Language>
                <StarCount>
                  {node.stargazers.totalCount}
                  <StarRate />
                </StarCount>
              </Box>
              <Wrapper>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <StarRate className={classes.leftIcon} />
                  UNSTAR
                </Button>
              </Wrapper>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Stars.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '5%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const Repo = styled.h2`
  font-size: 22px;
  color: gray;
`;

const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: lightgray;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Language = styled.div`
  margin: auto 20px;
`;

const StarCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const myQuery = graphql(myStars, { props: ({ data }) => ({ ...data }) });
const myStyles = withStyles(styles);

export default myQuery(myStyles(withApollo(Stars)));
