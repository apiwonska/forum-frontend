import styled from 'styled-components';

import { theme, Button as Button_ } from 'layout';

export const Button = styled(Button_)`
  width: 100%;
  margin: 1rem auto;
`;

export const InnerContentWrapper = styled.div`
  ${theme.media.minTablet} {
    max-width: 60rem;
    margin: 4rem auto 5rem;
  }
`;

export const DataWrapper = styled.div`
  margin: 3rem 0;
`;

export const DataGroup = styled.div`
  margin: 2rem 0;
`;

export const Label = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${theme.colors.neutralMidLight};
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const Data = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;
