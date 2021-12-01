import styled from 'styled-components';
import theme from '../theme';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  min-width: ${theme.pageMinWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LayoutWrapper;
