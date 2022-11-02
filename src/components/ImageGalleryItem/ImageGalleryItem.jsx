import {
  Image,
  ImageGalleryItem as ImageGalleryItemContainer,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, imageURL, tags, onClick }) => {
  const handleImageClick = id => {
    onClick(id);
  };

  return (
    <ImageGalleryItemContainer onClick={() => handleImageClick(id)}>
      <Image src={imageURL} alt={tags} />
    </ImageGalleryItemContainer>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
