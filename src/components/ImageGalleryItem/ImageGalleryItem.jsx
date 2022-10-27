import {
  Image,
  ImageGalleryItem as ImageGalleryItemContainer,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleImageClick = id => {
    this.props.onClick(id);
  };

  render() {
    const { id, imageURL, tags } = this.props;

    return (
      <ImageGalleryItemContainer onClick={() => this.handleImageClick(id)}>
        <Image src={imageURL} alt={tags} />
      </ImageGalleryItemContainer>
    );
  }
}

export default ImageGalleryItem;
