import React from 'react';

import { Anchor, Breadcrumb, BreadcrumbIcon } from 'layout';

export default () => (
  <Breadcrumb>
    <Anchor href="/">
      <BreadcrumbIcon name="home" />
      Home Page
    </Anchor>
    <span>Your Posts</span>
  </Breadcrumb>
);
