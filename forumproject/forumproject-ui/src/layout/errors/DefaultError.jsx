import React from 'react';
import { Helmet } from 'react-helmet';
import { LiveMessage } from 'react-aria-live';

import { CONSTANTS } from 'utils';
import Error from './Error';

const DefaultError = () => {
  return (
    <>
      <Helmet>
        <title>Error - {CONSTANTS.appName}</title>
      </Helmet>
      <LiveMessage message="Error" aria-live="polite" />

      <Error
        title="Error"
        errorMessage=""
        errorExplanation="Something went wrong. Please, try again later."
      />
    </>
  );
};

export default DefaultError;
