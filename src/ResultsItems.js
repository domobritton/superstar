import React from 'react';
import ButtonUI from './ButtonUI';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StarRate from '@material-ui/icons/StarRate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const ResultsItems = ({ node }) => {
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
          <ButtonUI />
        </Right>
      </Box>
    </Grid>
  );
};

const Box = styled(Paper)`
  display: flex;
  padding: 2%;
  text-align: left;
  color: #282c34;
`;

const Repo = styled.h2`
  margin-top: 0;
  font-size: 22px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: lightgray;
  word-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (max-width: 450px) {
    width: 65%;
  }
`;

const Info = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const Text = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
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

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Github = styled(FontAwesomeIcon)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: lightgray;
  }
`;

const Link = styled.a`
  margin-left: auto;
  margin-bottom: 20px;
`;

export default ResultsItems;
