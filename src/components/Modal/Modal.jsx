import { Overlay, Modal as ModalContainer } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContainer>{children}</ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
