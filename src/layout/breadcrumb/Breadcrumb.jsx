import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0 2rem;
  padding: 0;
  font-size: 1.4rem;
  list-style: none;
  overflow-wrap: word-break;
  line-height: 2;
`;

export const Li = styled.li`
  margin: 0 1rem;
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
