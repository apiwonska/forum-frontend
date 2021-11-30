import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../icons/SVGIcon';
import {
  DropdownWrapper,
  DropdownLi,
  IconSpan,
  DropdownUl,
  DropdownBtn,
} from './style';

function DropdownList({ dropdownOptions, closeDropdown }) {
  const renderOptions = () => {
    return dropdownOptions.map((option) => {
      return (
        <DropdownLi key={option.label} role="none">
          <DropdownBtn
            role="menuitem"
            onClick={() => {
              option.onClick();
              closeDropdown();
            }}
          >
            <IconSpan aria-hidden="true">
              <SVGIcon name={option.icon} />
            </IconSpan>
            {option.label}
          </DropdownBtn>
        </DropdownLi>
      );
    });
  };

  return (
    <DropdownWrapper>
      <DropdownUl role="menubar">{renderOptions()}</DropdownUl>
    </DropdownWrapper>
  );
}

DropdownList.propTypes = {
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default DropdownList;
