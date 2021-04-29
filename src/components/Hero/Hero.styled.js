import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const Hero = styled.div`
  position: relative;
  height: 300px;
  margin: auto;
  padding: 0 1rem;
  z-index: 1;
  background: #d9d9d9;
  background: linear-gradient(180deg, var(--heroBgTop), var(--heroBgBottom));
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const Left = styled.section`
  align-self: center;
  text-align: center;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    align-self: top;
    text-align: left;
    height: 100%;
    width: 80%;
    margin: auto;
    z-index: 2;
  }

  @media screen and ${breakpoints.device.sm} {
    width: 100%;
    align-self: stretch;
    text-align: center;
    padding: 0 6px;
    padding-top: 2rem;
  }
`;

export const Header = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
  color: var(--heroHeaderText);
`;

export const SubHeader = styled.h3`
  margin: 1rem 0 1.5rem 0;
  color: var(--heroSubHeaderText);
`;

export const LearnMoreBtn = styled.button`
  width: var(--btnWidth);
  height: var(--btnHeight);
  background: var(--btnBg);
  color: var(--btnColor);
  font-size: 1rem;
  letter-spacing: 1.2px;
  border-radius: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #022449;
  }
`;

export const Right = styled.section`
  margin: 0 0 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    margin: 1rem 1rem 0 0;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  opacity: 0.5;

  @media screen and ${breakpoints.device.sm} {
    opacity: 0.3;
  }
`;

export const Waves = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.3;
`;