import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from './PageTitle';
import PageTitleWrapper from './PageTitleWrapper';

const PageTitleBlock = React.forwardRef(({ title }, ref) => {
  return (
    <PageTitleWrapper>
      <PageTitle ref={ref} tabIndex="-1">
        {title}
      </PageTitle>
    </PageTitleWrapper>
  );
});

PageTitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitleBlock;
