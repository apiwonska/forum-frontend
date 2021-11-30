import React from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumb, BreadcrumbIcon, AnchorCurrent } from 'layout';

export default () => {
  const location = useLocation();

  return (
    <Breadcrumb>
      <AnchorCurrent href={location.pathname}>
        <BreadcrumbIcon name="home" />
        Home Page
      </AnchorCurrent>
    </Breadcrumb>
  );
};
