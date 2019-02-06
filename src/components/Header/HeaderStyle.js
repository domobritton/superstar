import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: gray;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.div`
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

export const Logout = styled.button`
  display: inline;
  background: transparent;
  color: white;
  font-size: 22px;
  border: none;
  outline: none;
`;

Logout.displayName = 'Button';
