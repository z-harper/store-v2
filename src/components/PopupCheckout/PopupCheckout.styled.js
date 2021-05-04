import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import breakpoints from '../../themes/breakpoints';

export const PopupCheckout = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: #fff;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  max-width: 800px;
  margin: auto;
  margin-top: 15vh;
  padding: 2rem 3rem;
  border: 1px solid #022449;
  border-radius: 4px;

  @media screen and ${breakpoints.device.xs} {
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  color: #022449;
`;

export const Message = styled.p`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 18px;
  color: #022449;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: var(--linkColor);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background: #022449;
  border-radius: 4px;
`;