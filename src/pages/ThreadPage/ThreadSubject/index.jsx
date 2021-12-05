import React from 'react';
import PropTypes from 'prop-types';

import { formatTime } from 'utils';
import { UserAvatar } from 'layout';
import {
  ThreadWrapper,
  PostHeader,
  PostHeaderInnerWrapper,
  DateSpan,
  UserLink,
  ThreadTitle,
  Content,
  AvatarThumbnailWrapper,
} from './style';

const ThreadSubject = ({ thread }) => {
  return (
    <ThreadWrapper>
      <PostHeader>
        <AvatarThumbnailWrapper>
          <UserAvatar
            src={thread.user.avatar}
            alt="Avatar thumbnail"
            type="thumbnail"
          />
        </AvatarThumbnailWrapper>

        <PostHeaderInnerWrapper>
          <UserLink to={`/profile/${thread.user.id}`}>
            {thread.user.username}
          </UserLink>
          <DateSpan>{formatTime.main(thread.created)}</DateSpan>
        </PostHeaderInnerWrapper>
      </PostHeader>
      <ThreadTitle>{thread.title}</ThreadTitle>
      <Content>{thread.subject}</Content>
    </ThreadWrapper>
  );
};

ThreadSubject.propTypes = {
  thread: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    }).isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadSubject;
