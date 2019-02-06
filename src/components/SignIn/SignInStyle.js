import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: gray;
`;

export const Logo = styled.img`
  width: 450px;
`;

export const Login = styled.a`
  color: white;
  font-size: 22px;
  &:hover {
    text-decoration-line: none;
    color: gold;
  }
`;
