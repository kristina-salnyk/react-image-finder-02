import api from './api';

const API_OPTIONS = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const fetchImages = async (searchQuery, page) => {
  const config = {
    params: {
      ...API_OPTIONS,
      q: searchQuery,
      page,
    },
  };
  const response = await api.request(config);
  return response.data;
};

export default fetchImages;
