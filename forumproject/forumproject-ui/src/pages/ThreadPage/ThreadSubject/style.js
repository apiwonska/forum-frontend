import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from 'layout';

export const ThreadWrapper = styled.div`
  background-color: #efefef;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PostHeaderInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const UserLink = styled(Link)`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${theme.colors.black};
`;

export const DateSpan = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.neutralMidDark};
`;

export const ThreadTitle = styled.h2`
  margin: 1.5rem 0;
  font-size: 1.6rem;
  font-weight: 600;
  overflow-wrap: anywhere;
  word-break: break-all;
  overflow: hidden;
`;

export const Content = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  overflow-wrap: anywhere;
  word-break: break-all;
  overflow: hidden;
`;

export const AvatarThumbnail = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin: 1 rem;
`;
