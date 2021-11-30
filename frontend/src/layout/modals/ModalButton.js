import styled, { css } from 'styled-components';

import theme from 'layout/theme';

const disabledBtnStyle = css`
  &,
  &:hover {
    background-color: #ffd589;
    font-size: 2rem;
    transform: scale(1, 1);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  }
`;

export default styled.button`
  display: block;
  width: 100%;
  min-width: 20rem;
  min-height: 4rem;
  font-size: 2rem;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);
  margin: 4.5rem auto 1rem;
  transform: scale(1, 1);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #ffa90a;
    font-size: 2.04rem;
    transform: scale(1.02, 1.02);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  }

  ${({ styleDisabled }) => {
    if (styleDisabled) return disabledBtnStyle;
    return null;
  }}

  @media (min-width: 500px) {
    width: auto;
  }
`;
