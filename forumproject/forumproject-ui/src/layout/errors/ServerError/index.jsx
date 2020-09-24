import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';

import { CONSTANTS } from 'utils';
import Error from '../Error';
import { Wrapper, InnerWrapper } from './style';
import Picture from './Picture';

const ServerError = () => {
  useEffect(() => {
    document.body.focus();
  }, []);

  return ReactDOM.createPortal(
    <LiveAnnouncer>
      <Helmet>
        <title>Server Error - {CONSTANTS.appName}</title>
      </Helmet>
      <LiveMessage message="Server Error" aria-live="polite" />

      <Wrapper>
        <InnerWrapper>
          <Error
            errorMessage="Server Error"
            errorExplanation="We are experiencing problems right now. Please try again later."
            picture={<Picture />}
            role="alert"
          />
        </InnerWrapper>
      </Wrapper>
    </LiveAnnouncer>,
    document.querySelector('#error')
  );
};

export default ServerError;
