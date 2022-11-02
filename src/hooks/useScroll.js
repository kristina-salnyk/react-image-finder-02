import { useEffect, useRef } from 'react';

const useScroll = page => {
  const galleryRef = useRef();

  useEffect(() => {
    if (page > 2) {
      scrollToPage();
    }
  }, [page]);

  const scrollToPage = () => {
    const imageRect =
      galleryRef.current?.firstElementChild?.getBoundingClientRect();

    if (imageRect) {
      window.scrollBy({
        top: imageRect.height * (window.innerHeight / imageRect.height - 1),
        behavior: 'smooth',
      });
    }
  };

  return [galleryRef];
};

export default useScroll;
