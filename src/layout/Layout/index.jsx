import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  closeSideDrawer as closeSideDrawer_,
  showSideNavbar as showSideNavbar_,
  hideSideNavbar as hideSideNavbar_,
} from 'redux/actions';
import { FocusContext } from 'context/FocusContext';
import LayoutSetup from '../LayoutSetup';
import theme from '../theme';
import AuthLayout from './AuthLayout';
import UnauthLayout from './UnauthLayout';
import LayoutWrapper from './style';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.layoutWrapperRef = React.createRef();
  }

  componentDidMount() {
    this.updateSideNavIsRendered();
    window.addEventListener('resize', this.handleResetDrawerState);
    window.addEventListener('resize', this.updateSideNavIsRendered);
  }

  componentDidUpdate() {
    this.updateSideNavIsRendered();
    this.handleResetDrawerState();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResetDrawerState);
    window.removeEventListener('resize', this.updateSideNavIsRendered);
  }

  handleResetDrawerState = () => {
    const { auth, sideNavIsRendered, closeSideDrawer } = this.props;

    if (sideNavIsRendered) closeSideDrawer();
    else if (!auth && window.innerWidth > theme.breakpoints.navUnauth) {
      closeSideDrawer();
    }
  };

  updateSideNavIsRendered = () => {
    const { auth, sideNavIsRendered, showSideNavbar, hideSideNavbar } =
      this.props;

    if (auth && window.innerWidth > theme.breakpoints.navAuth) {
      if (!sideNavIsRendered) showSideNavbar();
    } else if (sideNavIsRendered) hideSideNavbar();
  };

  focusOnLayoutWrapper() {
    if (this.layoutWrapperRef && this.layoutWrapperRef.current)
      this.layoutWrapperRef.current.focus();
  }

  render() {
    const { auth, children } = this.props;
    return (
      <LayoutSetup>
        <FocusContext.Provider
          value={{ focusOnLayoutWrapper: this.focusOnLayoutWrapper.bind(this) }}
        >
          <LayoutWrapper
            id="layout-wrapper"
            tabIndex="-1"
            ref={this.layoutWrapperRef}
          >
            {auth ? (
              <AuthLayout>{children}</AuthLayout>
            ) : (
              <UnauthLayout>{children}</UnauthLayout>
            )}
          </LayoutWrapper>
        </FocusContext.Provider>
      </LayoutSetup>
    );
  }
}

Layout.propTypes = {
  auth: PropTypes.bool.isRequired,
  sideNavIsRendered: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeSideDrawer: PropTypes.func.isRequired,
  showSideNavbar: PropTypes.func.isRequired,
  hideSideNavbar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: !!state.auth.authenticated,
    sideNavIsRendered: state.layout.sideNavIsRendered,
  };
};

export default connect(mapStateToProps, {
  closeSideDrawer: closeSideDrawer_,
  showSideNavbar: showSideNavbar_,
  hideSideNavbar: hideSideNavbar_,
})(Layout);
