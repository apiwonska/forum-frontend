import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { FocusOn } from 'react-focus-on';

import { CONSTANTS } from 'utils';
import Error from '../Error';
import { Wrapper, InnerWrapper } from './style';
import Picture from './Picture';

const ServerError = () => {
  return ReactDOM.createPortal(
    <>
      <Helmet>
        <title>Server Error - {CONSTANTS.appName}</title>
      </Helmet>

      <FocusOn returnFocus>
        <Wrapper>
          <InnerWrapper tabIndex="-1">
            <Error
              errorMessage="Server Error"
              errorExplanation="We are experiencing problems right now. Please try again later."
              picture={<Picture />}
            />
          </InnerWrapper>
        </Wrapper>
      </FocusOn>
    </>,
    document.querySelector('#error')
  );
};

export default ServerError;
