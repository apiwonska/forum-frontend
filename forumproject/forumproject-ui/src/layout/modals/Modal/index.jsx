import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { LiveAnnouncer } from 'react-aria-live';
import { FocusOn } from 'react-focus-on';

import SVGIcon from '../../icons/SVGIcon';
import {
  ModalBackground,
  ModalBody,
  Header,
  Title,
  CloseButton,
  Content,
} from './style';

class Modal extends React.Component {
  render() {
    const { handleDismiss, title, children } = this.props;

    return ReactDOM.createPortal(
      <LiveAnnouncer>
        <FocusOn
          onClickOutside={handleDismiss}
          onEscapeKey={handleDismiss}
          returnFocus
        >
          <ModalBackground onClick={handleDismiss}>
            <ModalBody
              role="dialog"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <Header>
                <CloseButton
                  onClick={handleDismiss}
                  aria-label="Close the dialog"
                >
                  <SVGIcon name="x_mark" />
                </CloseButton>
                <Title id="modal-title">{title}</Title>
              </Header>
              <Content>{children}</Content>
            </ModalBody>
          </ModalBackground>
        </FocusOn>
      </LiveAnnouncer>,
      document.querySelector('#modal')
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleDismiss: PropTypes.func.isRequired,
};

export default Modal;
