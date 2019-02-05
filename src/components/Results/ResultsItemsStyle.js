import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Box = styled(Paper)`
  display: flex;
  padding: 2%;
  text-align: left;
  color: #282c34;
`;

export const Repo = styled.h2`
  margin-top: 0;
  font-size: 22px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: lightgray;
  word-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (max-width: 450px) {
    width: 65%;
  }
`;

export const Info = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const Text = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Language = styled.div`
  margin: auto 20px;
`;

export const StarCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Github = styled(FontAwesomeIcon)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: lightgray;
  }
`;

export const Link = styled.a`
  margin-left: auto;
  margin-bottom: 20px;
`;
