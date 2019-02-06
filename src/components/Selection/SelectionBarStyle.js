import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';

export const Select = styled(Tab)`
  span {
    font-size: 17px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
