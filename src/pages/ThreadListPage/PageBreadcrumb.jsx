import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Anchor, AnchorCurrent, Breadcrumb, BreadcrumbIcon } from 'layout';

const PageBreadcrumb = ({ categoryName }) => {
  const location = useLocation();
  return (
    <Breadcrumb>
      <Anchor href="/">
        <BreadcrumbIcon name="home" />
        Home Page
      </Anchor>
      <AnchorCurrent href={location.pathname}>{categoryName}</AnchorCurrent>
    </Breadcrumb>
  );
};

PageBreadcrumb.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default PageBreadcrumb;
