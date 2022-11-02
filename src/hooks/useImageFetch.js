import fetchImages from '../utils/api/fetchImages';
import { useState } from 'react';

const useImageFetch = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [endOfResults, setEndOfResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImages = async searchQuery => {
    if (searchQuery.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const data = await fetchImages(searchQuery, page);

      setImages(prevState => {
        const state = [...prevState, ...data.hits];
        if (state.length === data.totalHits) {
          setEndOfResults(true);
        }
        return state;
      });

      setPage(prevState => prevState + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeSearchQuery = () => {
    setImages([]);
    setPage(1);
    setEndOfResults(false);
    setError(null);
  };

  return [
    images,
    page,
    endOfResults,
    isLoading,
    error,
    getImages,
    onChangeSearchQuery,
  ];
};

export default useImageFetch;
