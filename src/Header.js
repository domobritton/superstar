import React from 'react';

import superStar from './superstar.svg';

import StarRate from '@material-ui/icons/StarRate';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StarRate />
        <img src={superStar} alt="superstar" />
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #282c34;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.div`
  height: 60px;
  svg {
    animation: logo-spin infinite 20s linear;
    font-size: 60px;
    color: gold;
    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  img {
    height: 60px;
  }
`;

export default Header;
