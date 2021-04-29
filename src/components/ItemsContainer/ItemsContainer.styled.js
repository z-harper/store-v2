import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const ItemsContainer = styled.div`
  min-height: 400px;
  padding: 2rem 1.5rem;
  background: var(--itemsContainerBg);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: auto;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  gap: 2rem;
  justify-items: stretch;

  @media screen and ${breakpoints.device.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;