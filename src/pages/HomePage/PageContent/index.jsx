import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { LiveMessage } from 'react-aria-live';

import { PageWrapper, ContentWrapper, PageTitleBlock } from 'layout';
import { withLoading, withHandleErrors } from 'shared/hoc';
import { ForumInfoWrapper, ForumInfoText, PictureWrapper } from './style';
import WelcomePicture from '../WelcomePicture';
import CategoryList from '../CategoryList';
import PageBreadcrumb from '../PageBreadcrumb';

const PageContent = ({ categories }) => {
  return (
    <>
      <LiveMessage message="Home Page" aria-live="polite" />

      <PageWrapper>
        <PageTitleBlock title="Welcome to our Forum!" />
        <ContentWrapper>
          <PageBreadcrumb />

          <ForumInfoWrapper>
            <PictureWrapper>
              <WelcomePicture />
            </PictureWrapper>
            <ForumInfoText>
              Hi! My name is Anna. Welcome to my Forum App. This project was
              created to train new programming skills. It is not intended to be
              used as a real forum. Anyway, if you would like to leave a post
              here, you are welcome! Enjoy!
            </ForumInfoText>
          </ForumInfoWrapper>

          <CategoryList categories={categories} />
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

PageContent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default compose(withHandleErrors, withLoading)(PageContent);
