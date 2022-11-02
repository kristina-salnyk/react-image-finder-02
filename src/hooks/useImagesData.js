import fetchImages from '../utils/api/fetchImages';
import { useCallback, useEffect, useRef, useState } from 'react';

const useImagesData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageRef = useRef(1);
  const hasMoreRef = useRef(false);

  const getImages = useCallback(async () => {
    if (searchQuery.trim() === '') {
      return;
    }

    setIsLoading(true);
    try {
      const data = await fetchImages(searchQuery, pageRef.current);

      setImages(prevState => {
        const state = [...prevState, ...data.hits];

        if (state.length === data.totalHits) {
          hasMoreRef.current = true;
        }
        return state;
      });

      pageRef.current = pageRef.current + 1;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  const clearData = () => {
    setImages([]);
    hasMoreRef.current = false;
    setError(null);
    pageRef.current = 1;
  };

  useEffect(() => {
    getImages();
    return clearData;
  }, [searchQuery, getImages]);

  return [
    searchQuery,
    setSearchQuery,
    images,
    isLoading,
    error,
    pageRef.current,
    hasMoreRef.current,
    getImages,
  ];
};

export default useImagesData;
