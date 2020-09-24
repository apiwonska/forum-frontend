import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Anchor, AnchorCurrent, Breadcrumb, BreadcrumbIcon } from 'layout';

const PageBreadcrumb = ({ authUserId }) => {
  const location = useLocation();
  return (
    <Breadcrumb>
      <Anchor href="/">
        <BreadcrumbIcon name="home" />
        Home Page
      </Anchor>
      <Anchor href={`/profile/${authUserId}`}>Your Profile</Anchor>
      <AnchorCurrent href={location.pathname}>Edit Profile</AnchorCurrent>
    </Breadcrumb>
  );
};

PageBreadcrumb.propTypes = {
  authUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default PageBreadcrumb;
