import React from 'react';
import { useLocation } from 'react-router-dom';

import { Anchor, AnchorCurrent, Breadcrumb, BreadcrumbIcon } from 'layout';

export default () => {
  const location = useLocation();

  return (
    <Breadcrumb>
      <Anchor href="/">
        <BreadcrumbIcon name="home" />
        Home Page
      </Anchor>
      <AnchorCurrent href={location.pathname}>User Profile</AnchorCurrent>
    </Breadcrumb>
  );
};
