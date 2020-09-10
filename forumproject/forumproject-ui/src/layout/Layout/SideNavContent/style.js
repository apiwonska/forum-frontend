import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import theme from 'layout/theme';

export const Nav = styled.nav`
  margin: 4rem 0;
`;

export const NavUl = styled.ul`
  text-transform: capitalize;
  font-size: 1.6rem;
  line-height: 1.2;
  list-style: none;
  color: ${theme.colors.neutralMidLight};
  padding-left: 0;
`;

export const NavLi = styled.li`
  padding-left: 3rem;
  margin: 2rem 0;
  position: relative;
`;

export const NavLiInner = styled(NavLi)`
  padding-left: 4.5rem;
  margin-left: -3rem;
`;

const activeLink = css`
  color: ${theme.colors.black};
  font-weight: 600;
  text-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.3);

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -0.5rem;
    width: 1rem;
    height: 3rem;
    background-color: ${theme.colors.black};
  }
`;

export const NavLink = styled(Link)`
  color: ${theme.colors.white};
  line-height: 1.2;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.black};
    text-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.3);
  }

  ${({ active }) => (active ? activeLink : '')}
`;
