import { useEffect, useSyncExternalStore, useCallback } from 'react';

// Define the hook with 'query' parameter typed as a string
export const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (globalThis.window === undefined || !globalThis.matchMedia) {
        return () => {};
      }
      const media = globalThis.matchMedia(query);
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (globalThis.window === undefined || !globalThis.matchMedia) {
      return false;
    }
    return globalThis.matchMedia(query).matches;
  }, [query]);

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export const scrollTop = () => {
  globalThis.scrollTo({ top: 0, behavior: 'smooth' });
};

const getScrollbarWidth = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  scrollDiv.remove();
  return scrollbarWidth;
};

const hasScrollbar = () => document.body.scrollHeight > globalThis.innerHeight;

export const useHidescroll = () => {
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
