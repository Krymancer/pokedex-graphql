// External modules
import { useEffect } from 'react';

// Internal modules
import { PER_PAGE, VARIABLES as variables } from '@/graphql/constants';

/**
 * Hook to use browser's event scroll
 * @param {Boolean} loading The one of conditions which must be fulfilled to run the callback
 * @param {Function} callback The callback function to execute once reach the bottom of the viewport
 */
const useInfiniteScroll = (loading : Boolean, callback: Function) => {
  let perPage = 0;

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Execute callback function when the conditions are met
    if (!loading && scrollTop + clientHeight >= scrollHeight - 50) {
      callback({ variables: { ...variables, offset: (perPage += PER_PAGE) } });
    }
  };

  useEffect(() => {
    // Add `scroll` event listener
    window.addEventListener('scroll', scrollListener);

    // Clean the even when unmounted
    return () => window.removeEventListener('scroll', scrollListener);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useInfiniteScroll;
