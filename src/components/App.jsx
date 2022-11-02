import { Box } from './Box';
import Searchbar from './Searchbar';
import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import Message from './Message';
import getMessage from 'utils/messages/getMessage';
import useImagesData from '../hooks/useImagesData';

export const App = () => {
  const [currentImageId, setCurrentImageId] = useState(null);
  const [
    searchQuery,
    setSearchQuery,
    images,
    isLoading,
    error,
    page,
    hasMore,
    getImages,
  ] = useImagesData();

  const changeSearchQuery = value => {
    if (value === searchQuery) {
      return;
    }
    setSearchQuery(value);
  };

  const openView = id => {
    setCurrentImageId(id);
  };

  const closeView = () => {
    setCurrentImageId(null);
  };

  const currentImage = images.find(item => item.id === currentImageId);

  const message = getMessage({
    count: images.length,
    query: searchQuery,
    error,
  });

  return (
    <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
      <Searchbar onSubmit={changeSearchQuery} />

      {images.length > 0 && (
        <ImageGallery images={images} page={page} onClick={openView} />
      )}

      {images.length > 0 && !hasMore && (
        <Button onClick={() => getImages(searchQuery)}>Load more</Button>
      )}

      {isLoading && <Loader />}

      {currentImage && (
        <Modal onClose={closeView}>
          {<img src={currentImage.largeImageURL} alt={currentImage.tags} />}
        </Modal>
      )}

      {message && !isLoading && (
        <Message text={message.text} image={message.image} />
      )}
    </Box>
  );
};
