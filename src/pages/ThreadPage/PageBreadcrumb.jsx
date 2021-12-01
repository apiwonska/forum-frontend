import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Anchor, AnchorCurrent, Breadcrumb, BreadcrumbIcon } from 'layout';

const PageBreadcrumb = ({ categoryId, categoryName, threadTitle }) => {
  const location = useLocation();

  return (
    <Breadcrumb>
      <Anchor href="/">
        <BreadcrumbIcon name="home" />
        Home Page
      </Anchor>
      <Anchor href={`/categories/${categoryId}`}>{categoryName}</Anchor>
      <AnchorCurrent href={location.pathname}>{threadTitle}</AnchorCurrent>
    </Breadcrumb>
  );
};

PageBreadcrumb.propTypes = {
  categoryId: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  categoryName: PropTypes.string.isRequired,
  threadTitle: PropTypes.string.isRequired,
};

export default PageBreadcrumb;
