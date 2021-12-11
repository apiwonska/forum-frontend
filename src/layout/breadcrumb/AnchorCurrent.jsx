import React from 'react';
import styled from 'styled-components';
import { Link as Link_ } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from 'layout/theme';
import { Li } from './Breadcrumb';

const Link = styled(Link_)`
  position: relative;
  color: ${theme.colors.black};
  font-weight: 600;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
  text-decoration: none;
  background-color: rgba(31, 115, 183, 0.08);

  &:hover {
    background-color: rgba(31, 115, 183, 0.2);
  }
`;

const AnchorCurrent = ({ href, children }) => {
  return (
    <>
      <Li>
        <Link to={href} aria-current="page">
          {children}
        </Link>
      </Li>
    </>
  );
};

AnchorCurrent.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnchorCurrent;
