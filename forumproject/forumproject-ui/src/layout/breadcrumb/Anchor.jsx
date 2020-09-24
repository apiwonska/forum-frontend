import React from 'react';
import styled from 'styled-components';
import { Link as Link_ } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = styled(Link_)`
  position: relative;
  color: #2f3941;
  margin: 1rem 2.3rem 1rem 0rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  text-decoration: none;

  &:visited {
    color: #2f3941;
  }

  &:hover {
    background-color: rgba(31, 115, 183, 0.08);
  }

  &::after {
    position: absolute;
    top: 0.5rem;
    right: -1.2rem;
    content: '';
    display: inline-block;
    transform: rotate(15deg);
    height: 1.6rem;
    border-right: 0.1rem solid #2f3941;
  }
`;

const Anchor = ({ href, children }) => {
  return (
    <>
      <li>
        <Link to={href}>{children}</Link>
      </li>
    </>
  );
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
