import { Message as MessageContainer, Text, Image } from './Message.styled';
import PropTypes from 'prop-types';

const Message = ({ text, image }) => {
  return (
    <MessageContainer>
      <Text>{text}</Text>
      <Image src={image} alt={text} />
    </MessageContainer>
  );
};

export default Message;

Message.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
