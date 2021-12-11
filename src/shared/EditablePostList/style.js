import styled from 'styled-components';

import { theme } from 'layout';

export const PostListWrapper = styled.div`
  margin: 3rem 0;
`;
PostListWrapper.displayName = 'PostListWrapper';

export const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;
PostHeaderWrapper.displayName = 'PostHeaderWrapper';

export const PostWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 1rem;
  margin: 2rem 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
`;
PostWrapper.displayName = 'PostWrapper';

export const Content = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  white-space: pre-line;
  overflow-wrap: break-word;
  overflow: hidden;
`;
Content.displayName = 'Content';

export const DropdownWrapper = styled.div`
  margin-left: auto;
`;
DropdownWrapper.displayName = 'DropdownWrapper';
