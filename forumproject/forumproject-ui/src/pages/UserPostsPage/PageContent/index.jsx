import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { LiveMessage } from 'react-aria-live';

import PostList from 'shared/EditablePostList';
import {
  PageWrapper,
  ContentWrapper,
  PageTitleBlock,
  Pagination,
  PaginationWrapper,
  NoResults,
  SkipLink,
} from 'layout';
import { withHandleErrors, withLoading } from 'shared/hoc';
import { NoPostsPicture } from './style';
import PostHeader from '../PostHeader';
import PageBreadcrumb from '../PageBreadcrumb';

const PageContent = ({
  posts,
  currentPage,
  totalPages,
  handleChangePage,
  editingPost,
  handleUpdatePost,
  handleDeletePost,
  handleShowUpdateForm,
  handleHideUpdateForm,
}) => {
  const titleRef = useRef(null);

  const renderPagination = () => {
    return (
      <PaginationWrapper>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handleChangePage}
        />
      </PaginationWrapper>
    );
  };

  return (
    <>
      <LiveMessage message="Your Posts Page" aria-live="polite" />
      <SkipLink ref={titleRef} />

      <PageWrapper>
        <PageTitleBlock title="Your Posts" ref={titleRef} />

        <ContentWrapper>
          <PageBreadcrumb />

          {renderPagination()}

          {posts.length === 0 && (
            <NoResults picture={<NoPostsPicture />}>
              You haven&apos;t written any posts yet. Choose a topic and join
              the discussion!
            </NoResults>
          )}

          <PostList
            posts={posts}
            postHeader={PostHeader}
            editingPost={editingPost}
            handleUpdatePost={handleUpdatePost}
            handleDeletePost={handleDeletePost}
            handleShowUpdateForm={handleShowUpdateForm}
            handleHideUpdateForm={handleHideUpdateForm}
          />

          {renderPagination()}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

PageContent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  editingPost: PropTypes.number,
  handleUpdatePost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleShowUpdateForm: PropTypes.func.isRequired,
  handleHideUpdateForm: PropTypes.func.isRequired,
};

PageContent.defaultProps = {
  editingPost: null,
};

export default compose(withHandleErrors, withLoading)(PageContent);
