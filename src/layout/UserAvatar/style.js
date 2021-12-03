import styled from 'styled-components';

export const AvatarProfile = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  font-size: 1.6rem;
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const AvatarThumbnail = styled(AvatarProfile)`
  font-size: 1.3rem;
  width: 3.5rem;
  height: 3.5rem;
`;
