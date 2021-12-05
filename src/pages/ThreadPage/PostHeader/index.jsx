import React from 'react';
import PropTypes from 'prop-types';

import { formatTime } from 'utils';
import { UserAvatar } from 'layout';
import {
  PostHeaderInnerWrapper,
  DateSpan,
  UserLink,
  AvatarThumbnailWrapper,
} from './style';

const PostHeader = ({ post }) => (
  <>
    <AvatarThumbnailWrapper>
      <UserAvatar
        src={post.user.avatar}
        alt="Avatar thumbnail"
        type="thumbnail"
      />
    </AvatarThumbnailWrapper>
    <PostHeaderInnerWrapper>
      <UserLink to={`/profile/${post.user.id}`}>{post.user.username}</UserLink>
      <DateSpan>{formatTime.main(post.created)}</DateSpan>
    </PostHeaderInnerWrapper>
  </>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    }).isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
