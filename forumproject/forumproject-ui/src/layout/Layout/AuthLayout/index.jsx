import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Wrapper, MainContentWrapper } from './style';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer';
import SideNav from '../SideNav';
import Footer from '../Footer';
import SkipLink from '../SkipLink';

const AuthLayout = ({ children }) => {
  const sideNavIsRendered = useSelector(
    (state) => state.layout.sideNavIsRendered
  );

  const mainContentRef = useRef(null);

  const renderSideNavigation = () => {
    if (sideNavIsRendered) {
      return <SideNav />;
    }
    return <SideDrawer />;
  };

  return (
    <>
      <SkipLink ref={mainContentRef} />
      <Toolbar />
      <Wrapper>
        {renderSideNavigation()}
        <MainContentWrapper
          id="main-content"
          ref={mainContentRef}
          tabIndex="-1"
        >
          {children}
        </MainContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
