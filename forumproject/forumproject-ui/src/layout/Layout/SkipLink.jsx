import React from 'react';

import styled from 'styled-components';
import theme from '../theme';

const SkipLinkButton = styled.button`
  position: fixed;
  top: -4rem;
  left: 0.5rem;
  height: 4rem;
  padding: 0 1.5rem;
  background-color: ${theme.colors.neutralExtraLight};
  color: ${theme.colors.black};
  font-size: 1.8rem;
  text-transform: capitalize;
  border-width: 0;
  outline-width: 0;
  border-radius: 0 0 0.8rem 0.8rem;
  transition: 0.4s;
  z-index: 10;

  &:focus {
    top: 0;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

const SkipLink = React.forwardRef((props, ref) => {
  const handleClick = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    <SkipLinkButton id="skip-link" tabIndex="0" onClick={handleClick}>
      Skip to main content
    </SkipLinkButton>
  );
});

export default SkipLink;
