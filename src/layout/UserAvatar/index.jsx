import React from 'react';
import PropTypes from 'prop-types';

import { AvatarThumbnail, AvatarProfile } from './style';
import DefaultProfilePicture from '../../img/blank-profile-picture.jpeg';

const UserAvatar = ({ type, src, alt }) => {
  const onErrorImg = (e) => {
    if (e.target.src !== DefaultProfilePicture) {
      e.target.src = DefaultProfilePicture;
      e.target.onerror = null;
    }
  };

  if (type === 'profile') {
    return <AvatarProfile src={src} alt={alt} onError={onErrorImg} />;
  }

  if (type === 'thumbnail') {
    return <AvatarThumbnail src={src} alt={alt} onError={onErrorImg} />;
  }

  return null;
};

UserAvatar.propTypes = {
  type: PropTypes.oneOf(['profile', 'thumbnail']).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default UserAvatar;
