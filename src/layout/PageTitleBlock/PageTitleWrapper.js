import styled from 'styled-components';

import theme from 'layout/theme';

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 10rem;
  background-color: ${theme.colors.secondary};
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 3rem;
  overflow-wrap: break-word;
  overflow: hidden;
`;
PageTitleWrapper.displayName = 'PageTitleWrapper';

export default PageTitleWrapper;
