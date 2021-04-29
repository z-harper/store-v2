import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const Stars = styled.div`

  @media screen and ${breakpoints.device.sm} {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;