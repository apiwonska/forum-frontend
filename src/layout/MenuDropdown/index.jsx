import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';

import SVGIcon from '../icons/SVGIcon';
import { Wrapper, MoreBtn } from './style';
import DropdownList from './DropdownList';

function MenuDropdown({ dropdownOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnBtnClick = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => setIsOpen(false);

  return (
    <Wrapper>
      <MoreBtn
        onClick={handleOnBtnClick}
        isOpen={isOpen}
        className="ignore-react-onclickoutside"
        aria-label="Edit options"
      >
        <SVGIcon name="more_vert" aria-hidden="true" />
      </MoreBtn>
      {isOpen && (
        <FocusOn
          onClickOutside={closeDropdown}
          onEscapeKey={closeDropdown}
          enabled={isOpen}
          returnFocus
        >
          <DropdownList
            dropdownOptions={dropdownOptions}
            closeDropdown={closeDropdown}
          />
        </FocusOn>
      )}
    </Wrapper>
  );
}

MenuDropdown.propTypes = {
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuDropdown;
