import { Button as ButtonContainer } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
