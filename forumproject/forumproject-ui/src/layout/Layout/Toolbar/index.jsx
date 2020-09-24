import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openSideDrawer } from 'redux/actions';
import SVGIcon from '../../icons/SVGIcon';
import {
  Header,
  NavContainerDiv,
  BrandDiv,
  ProjectName,
  Nav,
  NavUl,
  NavLi,
  NavLink,
  NavToggleButton,
  BubbleIcon,
  UserIcon,
} from './style';

const Toolbar = () => {
  const auth = useSelector((state) => !!state.auth.authenticated);
  const sideDrawerIsOpen = useSelector(
    (state) => state.layout.sideDrawerIsOpen
  );
  const dispatch = useDispatch();
  const boundOpenSideDrawer = () => dispatch(openSideDrawer());

  return (
    <Header auth={auth} role="banner" aria-hidden={sideDrawerIsOpen}>
      <NavContainerDiv>
        <NavToggleButton
          auth={auth}
          onClick={boundOpenSideDrawer}
          aria-label="Show main navigation"
        >
          <SVGIcon name="menu" aria-hidden="true" />
        </NavToggleButton>
        <BrandDiv>
          <NavLink to="/" auth={auth}>
            <ProjectName>
              <BubbleIcon name="speach_bubble" />
              Forum
            </ProjectName>
          </NavLink>
        </BrandDiv>

        {!auth && (
          <Nav aria-label="Header navigation">
            <NavUl>
              <NavLi>
                <NavLink to="/auth" auth={auth}>
                  <UserIcon name="user" />
                  Log In
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to="/register" auth={auth}>
                  <UserIcon name="add_user" />
                  Register
                </NavLink>
              </NavLi>
            </NavUl>
          </Nav>
        )}
      </NavContainerDiv>
    </Header>
  );
};

export default Toolbar;
