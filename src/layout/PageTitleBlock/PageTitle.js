import styled from 'styled-components';

import theme from 'layout/theme';

const PageTitle = styled.h1`
  flex-grow: 1;
  font-size: 2.6rem;
  margin: 1.5rem;
  text-transform: capitalize;
  color: ${theme.colors.white};
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);
  text-align: center;
`;
PageTitle.displayName = 'PageTitle';

export default PageTitle;
