import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { LiveMessage } from 'react-aria-live';

import PostList from 'shared/EditablePostList';
import { withHandleErrors, withLoading } from 'shared/hoc';
import {
  PageWrapper,
  ContentWrapper,
  PageTitleWrapper,
  Pagination,
  PaginationWrapper,
} from 'layout';
import { Button, PageTitleThread, ButtonWrapper } from './style';
import CreatePostForm from '../CreatePostForm';
import ThreadSubject from '../ThreadSubject';
import PostHeader from '../PostHeader';
import PageBreadcrumb from '../PageBreadcrumb';

const PageContent = ({
  category,
  thread,
  posts,
  handleMoveUserToEnd,
  currentPage,
  totalPages,
  handleChangePage,
  editingPost,
  handleUpdatePost,
  handleDeletePost,
  handleShowUpdateForm,
  handleHideUpdateForm,
  createPostInputRef,
  handleCreatePost,
}) => {
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
      <LiveMessage message={`Thread ${thread.title} Page`} aria-live="polite" />

      <PageWrapper>
        <PageTitleWrapper>
          <PageTitleThread>{thread.title}</PageTitleThread>
        </PageTitleWrapper>

        <ContentWrapper>
          <PageBreadcrumb
            categoryId={category.id}
            categoryName={category.name}
            threadTitle={thread.title}
          />

          <ButtonWrapper>
            <Button type="button" onClick={handleMoveUserToEnd}>
              Add Post
            </Button>
          </ButtonWrapper>

          {renderPagination()}

          {currentPage === 1 && <ThreadSubject thread={thread} />}

          <PostList
            posts={posts}
            postHeader={PostHeader}
            editingPost={editingPost}
            handleUpdatePost={handleUpdatePost}
            handleDeletePost={handleDeletePost}
            handleShowUpdateForm={handleShowUpdateForm}
            handleHideUpdateForm={handleHideUpdateForm}
          />

          {currentPage === totalPages && (
            <CreatePostForm
              ref={createPostInputRef}
              onSubmit={handleCreatePost}
            />
          )}

          {renderPagination()}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

PageContent.propTypes = {
  thread: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleMoveUserToEnd: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  editingPost: PropTypes.number,
  handleUpdatePost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleShowUpdateForm: PropTypes.func.isRequired,
  handleHideUpdateForm: PropTypes.func.isRequired,
  createPostInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  handleCreatePost: PropTypes.func.isRequired,
};

PageContent.defaultProps = {
  editingPost: null,
};

export default compose(withHandleErrors, withLoading)(PageContent);
