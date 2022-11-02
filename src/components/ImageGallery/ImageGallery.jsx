import { ImageGallery as ImageGalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import useScroll from '../../hooks/useScroll';

const ImageGallery = ({ images, page, onClick }) => {
  const [galleryRef] = useScroll(page);

  return (
    <ImageGalleryContainer ref={galleryRef}>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          id={item.id}
          imageURL={item.webformatURL}
          tags={item.tags}
          onClick={onClick}
        />
      ))}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
