import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LiveAnnouncer } from 'react-aria-live';

import store from 'redux/store';
import Routing from 'Routing';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => {
  return (
    <Provider store={store}>
      <LiveAnnouncer>
        <Routing />
      </LiveAnnouncer>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
