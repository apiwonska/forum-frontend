import React from 'react';

import { Breadcrumb, BreadcrumbIcon } from 'layout';

export default () => {
  return (
    <Breadcrumb>
      <li>
        <BreadcrumbIcon name="home" />
        Home Page
      </li>
    </Breadcrumb>
  );
};
