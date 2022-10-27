import { ImageGallery as ImageGalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
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

  galleryRef = React.createRef();

  componentDidUpdate(prevProprs) {
    if (prevProprs.page !== this.props.page && this.props.page > 2) {
      this.scrollToPage();
    }
  }

  scrollToPage = () => {
    const imageRect =
      this.galleryRef.current?.firstElementChild?.getBoundingClientRect();

    if (imageRect) {
      window.scrollBy({
        top: imageRect.height * (window.innerHeight / imageRect.height - 1),
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { images, onClick } = this.props;

    return (
      <ImageGalleryContainer ref={this.galleryRef}>
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
  }
}

export default ImageGallery;
