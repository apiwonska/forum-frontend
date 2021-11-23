import React from 'react';
import PropTypes from 'prop-types';

import PageTitleBlock from '../../PageTitleBlock';
import {
  PageWrapper,
  ContentWrapper,
  ErrorMessage,
  ErrorExplanation,
  PictureWrapper,
} from './style';

const Error = ({ title, errorMessage, errorExplanation, picture }) => {
  return (
    <PageWrapper role="alert">
      {title.length !== 0 && <PageTitleBlock title={title} id="error-title" />}
      <ContentWrapper>
        {errorMessage.length !== 0 && (
          <ErrorMessage id="error-message">{errorMessage}</ErrorMessage>
        )}
        {ErrorExplanation.length !== 0 && (
          <ErrorExplanation id="error-explanation">
            {errorExplanation}
          </ErrorExplanation>
        )}
        {picture && <PictureWrapper>{picture}</PictureWrapper>}
      </ContentWrapper>
    </PageWrapper>
  );
};

Error.propTypes = {
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  errorExplanation: PropTypes.string,
  picture: PropTypes.oneOfType([PropTypes.element, PropTypes.oneOf([null])]),
};

Error.defaultProps = {
  title: '',
  errorMessage: '',
  errorExplanation: '',
  picture: null,
};

export default Error;
