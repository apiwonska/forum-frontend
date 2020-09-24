import React from 'react';
import PropTypes from 'prop-types';

import PageTitleText from './PageTitleText';
import PageTitleWrapper from './PageTitleWrapper';

const PageTitleBlock = React.forwardRef(({ title }, ref) => {
  return (
    <PageTitleWrapper>
      <PageTitleText ref={ref} tabIndex="-1">
        {title}
      </PageTitleText>
    </PageTitleWrapper>
  );
});

PageTitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitleBlock;
