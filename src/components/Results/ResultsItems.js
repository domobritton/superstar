import React from 'react';
import PropTypes from 'prop-types';

import ButtonUI from './ButtonUI';

import Grid from '@material-ui/core/Grid';
import StarRate from '@material-ui/icons/StarRate';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Box,
  Repo,
  Description,
  Left,
  Right,
  Info,
  Text,
  Language,
  StarCount,
  Github,
  Link,
} from './ResultsItemsStyle';

export const ResultsItems = ({ node }) => {
  return (
    <Grid item xs={12}>
      <Box>
        <Left>
          <Repo>{node.nameWithOwner}</Repo>
          <Description>{node.description}</Description>
          <Info>
            <Text>Language</Text>
            {node.primaryLanguage !== null && (
              <Language style={{ color: node.primaryLanguage.color }}>
                {node.primaryLanguage.name}
              </Language>
            )}
            <StarCount>
              {node.stargazers.totalCount}
              <StarRate />
            </StarCount>
          </Info>
        </Left>
        <Right>
          <Link href={node.url} target="_blank" rel="noopener noreferrer">
            <Github icon={faGithub} size="2x" color="gray" />
          </Link>
          <ButtonUI id={node.id} starred={node.viewerHasStarred} />
        </Right>
      </Box>
    </Grid>
  );
};

ResultsItems.propTypes = {
  node: PropTypes.object,
};
