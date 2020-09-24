import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logOut, fetchCategories, closeSideDrawer } from 'redux/actions';
import { Nav, NavUl, NavLi, NavLiInner, NavLink } from './style';

const SideNavContent = ({ tabIndex }) => {
  const auth = useSelector((state) => !!state.auth.authenticated);
  const userId = useSelector((state) => state.auth.user.id);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const boundFetchCategories = () => dispatch(fetchCategories());
  const boundCloseSideDrawer = () => dispatch(closeSideDrawer());
  const location = useLocation();

  useEffect(() => {
    if (auth && !categories.fetched) {
      boundFetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const NavLinkWithProps = (props) => {
    const { to } = props;
    const path = location.pathname.replace(/\/threads\/.*/, '');
    return (
      <NavLink
        onClick={boundCloseSideDrawer}
        active={path === to ? 'active' : ''}
        {...props}
        tabIndex={tabIndex}
      />
    );
  };

  NavLinkWithProps.propTypes = {
    to: PropTypes.string.isRequired,
  };

  const renderCategoryLinks = () => {
    const CategoryLinks = categories.data.map((category) => (
      <NavLiInner key={category.id}>
        <NavLinkWithProps to={`/categories/${category.id}`}>
          {category.name}
        </NavLinkWithProps>
      </NavLiInner>
    ));
    return <NavUl>{CategoryLinks}</NavUl>;
  };

  if (auth) {
    return (
      <Nav aria-label="Main navigation">
        <NavUl>
          <NavLi>
            <NavLinkWithProps to="/">Home | All Categories</NavLinkWithProps>
            {categories.fetched && renderCategoryLinks()}
          </NavLi>
          <NavLi>
            <NavLinkWithProps to={`/profile/${userId}`}>
              Profile
            </NavLinkWithProps>
          </NavLi>
          <NavLi>
            <NavLinkWithProps to="/profile/posts">Your Posts</NavLinkWithProps>
          </NavLi>
          <NavLi>
            <NavLinkWithProps
              to=""
              onClick={() => {
                dispatch(logOut());
                dispatch(closeSideDrawer());
              }}
            >
              Logout
            </NavLinkWithProps>
          </NavLi>
        </NavUl>
      </Nav>
    );
  }
  return (
    <nav>
      <NavUl>
        <NavLi>
          <NavLinkWithProps to="/auth">Log In</NavLinkWithProps>
        </NavLi>
        <NavLi>
          <NavLinkWithProps to="/register">Register</NavLinkWithProps>
        </NavLi>
      </NavUl>
    </nav>
  );
};

SideNavContent.propTypes = {
  tabIndex: PropTypes.string,
};

SideNavContent.defaultProps = {
  tabIndex: '0',
};

export default SideNavContent;
