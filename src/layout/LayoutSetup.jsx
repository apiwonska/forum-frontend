import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as ZenDeskGardenThemeProvider } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  
  html {
    font-family: ${theme.fonts.default};
    color: ${theme.colors.black};
    line-height: 1.45;
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1 { font-size: 3.2rem}

  h2 { font-size: 2.4rem}

  h3 { font-size: 1.8rem}

  h4 { font-size: 1.6rem}
  
  h5 { font-size: 12.8rem}
  
  input:focus,
  textarea:focus {
    outline: none;
  }

  a:focus{
    outline: black 1px dotted;
  }

  h1:focus, button:focus {
    outline: black 1px dotted;
    outline-offset: .4rem;
  }

  button::-moz-focus-inner {
    border: 0;
  }
  /* Alt text style */
  img {
    font-size: 1.6rem;
    display: grid;
    justify-content: center;
    align-content: center;
  }
`;

const LayoutSetup = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ZenDeskGardenThemeProvider>
        <GlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600, 700|Raleway&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>{children}</>
      </ZenDeskGardenThemeProvider>
    </ThemeProvider>
  );
};

LayoutSetup.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutSetup;
