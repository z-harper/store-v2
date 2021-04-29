import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.div`
  height: 80px;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--navbarBg);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 50px;
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const LinkItem = styled.li`
  height: 80px; 
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: var(--linkColor);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &.active {
    color: var(--linkActive);
  }
`;