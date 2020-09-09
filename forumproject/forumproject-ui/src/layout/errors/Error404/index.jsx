import React from 'react';
import { Helmet } from 'react-helmet';
import { LiveMessage } from 'react-aria-live';

import { CONSTANTS } from 'utils';
import Error from '../Error';
import PageNotFoundPicture from './PageNotFoundPicture';

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404 - {CONSTANTS.appName}</title>
      </Helmet>
      <LiveMessage message="Error 404 Page Not Found" aria-live="polite" />

      <Error
        title="Error"
        errorMessage="This page isn't available"
        errorExplanation="The link you followed may be broken, or the page may have been removed."
        picture={<PageNotFoundPicture />}
      />
    </>
  );
};

export default Error404;
