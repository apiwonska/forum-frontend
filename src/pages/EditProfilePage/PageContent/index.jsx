import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { LiveMessage } from 'react-aria-live';

import { withHandleErrors, withLoading } from 'shared/hoc';
import {
  PageWrapper,
  ContentWrapper,
  GroupWrapper,
  PageTitleBlock,
} from 'layout';
import { InnerContentWrapper } from './style';
import PageBreadcrumb from '../PageBreadcrumb';
import AvatarUpload from '../AvatarUpload';
import UserDataForm from '../UserDataForm';

const PageContent = ({
  authUserId,
  user,
  selectedFile,
  handleFileSelect,
  handleFileUpload,
  handleUpdateUserData,
}) => {
  const { username, email, description } = user.data;
  const initialFormValues = { username, email, description };

  return (
    <>
      <LiveMessage message="Edit Profile Page" aria-live="polite" />

      <PageWrapper>
        <PageTitleBlock title="Edit Your Profile" />

        <ContentWrapper>
          <PageBreadcrumb authUserId={authUserId} />

          <InnerContentWrapper>
            <AvatarUpload
              avatarSrc={user.data.avatar}
              selectedFile={selectedFile}
              handleFileSelect={handleFileSelect}
              handleFileUpload={handleFileUpload}
              uploadErrors={
                user.uploadErrors.data && user.uploadErrors.data.avatar
              }
            />

            <GroupWrapper>
              <UserDataForm
                authUserId={authUserId}
                initialFormValues={initialFormValues}
                handleUpdateUserData={handleUpdateUserData}
              />
            </GroupWrapper>
          </InnerContentWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

PageContent.propTypes = {
  authUserId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    uploadErrors: PropTypes.shape({
      data: PropTypes.shape({
        avatar: PropTypes.arrayOf(PropTypes.string),
      }),
    }).isRequired,
    data: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      email: PropTypes.string,
      description: PropTypes.string,
      avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    }).isRequired,
  }).isRequired,
  selectedFile: PropTypes.instanceOf(File),
  handleFileSelect: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  handleUpdateUserData: PropTypes.func.isRequired,
};

PageContent.defaultProps = {
  selectedFile: null,
};

export default compose(withHandleErrors, withLoading)(PageContent);
