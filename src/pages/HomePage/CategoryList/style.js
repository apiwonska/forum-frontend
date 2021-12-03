import styled from 'styled-components';
import { Link as Link_ } from 'react-router-dom';

import { theme } from 'layout';

export const InnerContentWrapper = styled.div`
  margin: 5rem 0;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);

  ${theme.media.minTablet} {
    flex-direction: row;
  }
`;

export const MainContent = styled.div`
  ${theme.media.minTablet} {
    flex-basis: 85%;
    padding-right: 2rem;
  }
`;

export const CardTitle = styled.h2`
  position: relative;
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 2rem;
  text-transform: capitalize;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 2.5rem;

  &:before {
    position: absolute;
    bottom: -1rem;
    left: 0;
    content: '';
    width: 5rem;
    max-width: 100%;
    height: 0.4rem;
    background-color: ${theme.colors.secondary};
    transition: 0.6s ease-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

export const CardText = styled.p`
  font-size: 1.4rem;
  margin: 0%;
`;

export const CategoryLink = styled(Link_)`
  color: ${theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: ${theme.colors.black};
  }
`;

export const SideInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  ${theme.media.minTablet} {
    flex-direction: column;
    justify-content: center;
    flex-basis: 15%;
    min-width: 10rem;
    padding-left: 2rem;
    border-left: 0.1rem lightgray solid;
  }
`;

export const StatsGroup = styled.div`
  margin: 1.5rem 2rem 0 0;

  ${theme.media.minTablet} {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;

export const StatsTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const StatsNum = styled.span`
  font-size: 1.2rem;
`;

export const Link = styled(Link_)`
  color: ${theme.colors.black};

  &:visited {
    color: ${theme.colors.black};
  }
`;
