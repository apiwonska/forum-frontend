import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { GroupWrapper, FormError, UserAvatar } from 'layout';
import {
  UploadButton,
  FileInput,
  FileInputLabel,
  ButtonGroupWrapper,
} from './style';

const AvatarUpload = ({
  handleFileSelect,
  handleFileUpload,
  avatarSrc,
  uploadErrors,
  selectedFile,
}) => {
  const [fileInputFocused, setFileInputFocused] = useState(false);

  return (
    <>
      <GroupWrapper>
        <UserAvatar src={avatarSrc} alt="User avatar" type="profile" />
      </GroupWrapper>

      <ButtonGroupWrapper>
        <FileInputLabel htmlFor="file-upload" focused={fileInputFocused}>
          Choose Image...
        </FileInputLabel>
        <FileInput
          type="file"
          id="file-upload"
          onChange={handleFileSelect}
          onFocus={() => setFileInputFocused(true)}
          onBlur={() => setFileInputFocused(false)}
        />

        <UploadButton
          type="button"
          onClick={handleFileUpload}
          color="blue"
          disabled={!selectedFile}
        >
          Upload
        </UploadButton>
      </ButtonGroupWrapper>

      {uploadErrors && <FormError>{uploadErrors[0]}</FormError>}
    </>
  );
};

AvatarUpload.propTypes = {
  uploadErrors: PropTypes.arrayOf(PropTypes.string),
  avatarSrc: PropTypes.string.isRequired,
  handleFileSelect: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  selectedFile: PropTypes.instanceOf(File),
};

AvatarUpload.defaultProps = {
  uploadErrors: null,
  selectedFile: null,
};

export default AvatarUpload;
