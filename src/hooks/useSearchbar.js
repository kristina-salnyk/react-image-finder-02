import { useState } from 'react';

const useSearchbar = onSubmit => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return [searchQuery, handleInputChange, handleFormSubmit];
};

export default useSearchbar;
