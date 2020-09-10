import React from 'react';
import { useHistory } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';

import { withHandleServerErrors } from 'shared/hoc';
import {
  Container,
  ContentWrapper,
  Button,
  PictureWrapper,
  Title,
} from './style';
import GroupChatPicture from '../GroupChatPicture';

const PageContent = () => {
  const history = useHistory();

  return (
    <>
      <LiveMessage message="Access Page" aria-live="polite" />

      <Container>
        <ContentWrapper>
          <PictureWrapper>
            <GroupChatPicture width="100%" height="100%" />
          </PictureWrapper>
          <Title>Discuss career and get job advice!</Title>
          <Button
            color="yellow"
            size="XL"
            onClick={() => history.push('/register')}
          >
            Join community!
          </Button>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default withHandleServerErrors(PageContent);
