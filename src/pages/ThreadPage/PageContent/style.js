import styled from 'styled-components';

import { Button as Button_, PageTitle } from 'layout';

export const PageTitleThread = styled(PageTitle)`
  font-size: 2rem;
`;
PageTitleThread.displayName = 'PageTitleThread';

export const Button = styled(Button_)`
  width: 100%;

  @media (min-width: 400px) {
    width: auto;
  }
`;
Button.displayName = 'Button';

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 2rem 0 2rem;
  justify-content: flex-end;
`;
ButtonWrapper.displayName = 'ButtonWrapper';
