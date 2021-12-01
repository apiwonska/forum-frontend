import React from 'react';
import { Helmet } from 'react-helmet';

import { CONSTANTS } from 'utils';
import Error from './Error';

const DefaultError = () => {
  return (
    <>
      <Helmet>
        <title>Error - {CONSTANTS.appName}</title>
      </Helmet>

      <Error
        title="Error"
        errorMessage=""
        errorExplanation="Something went wrong. Please, try again later."
      />
    </>
  );
};

export default DefaultError;
