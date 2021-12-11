import React from 'react';
import styled from 'styled-components';
import { Link as Link_ } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Li } from './Breadcrumb';

const Link = styled(Link_)`
  position: relative;
  color: #2f3941;
  padding: 0.2rem;
  border-radius: 0.3rem;
  text-decoration: none;

  &:visited {
    color: #2f3941;
  }

  &:hover {
    background-color: rgba(31, 115, 183, 0.08);
  }

  &::after {
    position: absolute;
    top: 50%;
    right: -1rem;
    content: '';
    display: inline-block;
    transform: translateY(-50%) rotate(15deg);
    height: 1.6rem;
    border-right: 0.1rem solid #2f3941;
  }
`;

const Anchor = ({ href, children }) => {
  return (
    <>
      <Li>
        <Link to={href}>{children}</Link>
      </Li>
    </>
  );
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
