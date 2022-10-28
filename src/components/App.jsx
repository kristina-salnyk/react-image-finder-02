import { Box } from './Box';
import Searchbar from './Searchbar';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Button from './Button';
import fetchImages from '../utils/api/fetchImages';
import Loader from './Loader';
import Modal from './Modal';
import Message from './Message';
import getMessage from 'utils/messages/getMessage';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loadedAllPages: false,
    isLoading: false,
    selectedImage: null,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      await this.loadImages();
    }
  }

  changeSearchQuery = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        images: [],
        page: 1,
        loadedAllPages: false,
        error: null,
      });
    }
  };

  loadImages = async () => {
    const { searchQuery, page } = this.state;

    if (searchQuery.trim() !== '') {
      this.setState({ isLoading: true, error: null });

      try {
        const data = await fetchImages(searchQuery, page);

        this.setState(prevState => {
          const state = {
            images: [...prevState.images, ...data.hits],
            page: prevState.page + 1,
          };

          if (data.totalHits === state.images.length) {
            state.loadedAllPages = true;
          }

          return state;
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  openImage = id => {
    const selectedImage = this.state.images.find(item => item.id === id);
    this.setState({ selectedImage });
  };

  closeImage = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, searchQuery, isLoading, error } = this.state;
    const params = { count: images.length, query: searchQuery, error };
    const message = getMessage(params);

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <Searchbar onSubmit={this.changeSearchQuery} />

        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            page={this.state.page}
            onClick={this.openImage}
          />
        )}

        {this.state.images.length > 0 && !this.state.loadedAllPages && (
          <Button onClick={this.loadImages}>Load more</Button>
        )}

        {this.state.isLoading && <Loader />}

        {this.state.selectedImage && (
          <Modal onClick={this.closeImage}>
            {
              <img
                src={this.state.selectedImage.largeImageURL}
                alt={this.state.selectedImage.tags}
              />
            }
          </Modal>
        )}

        {message && !isLoading && (
          <Message text={message.text} image={message.image} />
        )}
      </Box>
    );
  }
}
