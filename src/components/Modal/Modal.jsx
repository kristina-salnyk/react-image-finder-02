import { Overlay, Modal as ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  const [handleOverlayClick] = useModal(onClose);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};
