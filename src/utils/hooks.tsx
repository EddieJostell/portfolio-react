import { useState, useEffect } from 'react';

// Define the hook with 'query' parameter typed as a string
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Early return if window doesn't exist or matchMedia isn't supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define the listener as a separate function to avoid recreating it on each render
    const listener = () => setMatches(media.matches);

    // Use 'change' instead of 'resize' for better performance
    media.addEventListener('change', listener);

    // Cleanup function to remove the event listener
    return () => media.removeEventListener('change', listener);
  }, [matches, query]); // Only recreate the listener when 'matches' or 'query' changes

  return matches;
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const useHidescroll = () => {
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  function hasScrollbar() {
    return document.body.scrollHeight > window.innerHeight;
  }

  useEffect(() => {
    if (hasScrollbar()) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.classList.add('no-scroll');

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('no-scroll');
    };
  }, []);
};
