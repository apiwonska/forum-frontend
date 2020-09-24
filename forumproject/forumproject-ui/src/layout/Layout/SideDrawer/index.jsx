import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FocusOn } from 'react-focus-on';

import { closeSideDrawer } from 'redux/actions';
import SideNavContent from '../SideNavContent';
import SVGIcon from '../../icons/SVGIcon';
import {
  Section,
  Overlay,
  DrawerHeader,
  NavToggleButton,
  NavLink,
  ProjectName,
  BubbleIcon,
} from './style';

const SideDrawer = () => {
  const sideDrawerIsOpen = useSelector(
    (state) => state.layout.sideDrawerIsOpen
  );
  const [tabIndexValue, setTabIndexValue] = useState('-1');
  const dispatch = useDispatch();
  const boundCloseSideDrawer = () => dispatch(closeSideDrawer());

  useEffect(() => {
    if (sideDrawerIsOpen) {
      setTabIndexValue('0');
    } else {
      setTabIndexValue('-1');
    }
  }, [sideDrawerIsOpen]);

  return (
    <>
      <Overlay show={sideDrawerIsOpen} />
      <FocusOn
        onClickOutside={boundCloseSideDrawer}
        onEscapeKey={boundCloseSideDrawer}
        enabled={sideDrawerIsOpen}
        returnFocus
      >
        <Section show={sideDrawerIsOpen} aria-hidden={!sideDrawerIsOpen}>
          <DrawerHeader>
            <NavToggleButton
              onClick={boundCloseSideDrawer}
              aria-label="Close main navigation"
              tabIndex={tabIndexValue}
            >
              <SVGIcon name="menu" aria-hidden="true" />
            </NavToggleButton>
            <NavLink
              to="/"
              onClick={boundCloseSideDrawer}
              tabIndex={tabIndexValue}
            >
              <ProjectName>
                <BubbleIcon name="speach_bubble" />
                Forum
              </ProjectName>
            </NavLink>
          </DrawerHeader>
          <SideNavContent tabIndex={tabIndexValue} />
        </Section>
      </FocusOn>
    </>
  );
};

export default SideDrawer;
