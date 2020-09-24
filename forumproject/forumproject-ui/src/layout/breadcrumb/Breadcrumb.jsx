import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 2rem 1rem 0;
  padding-left: 0;
  font-size: 1.4rem;
  list-style: none;
  overflow-wrap: anywhere;
  word-break: break-all;
`;

const Breadcrumb = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <Ol>{children}</Ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Breadcrumb;
