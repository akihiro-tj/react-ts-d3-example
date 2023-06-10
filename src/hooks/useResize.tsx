import { useEffect } from 'react';

const useResize = (callback: () => void, interval = 100) => {
  useEffect(() => {
    window.setTimeout(callback, interval);
  }, [callback, interval]);

  useEffect(() => {
    let timeoutID: number;

    function handleResize() {
      window.clearTimeout(timeoutID);
      timeoutID = window.setTimeout(callback, interval);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback, interval]);
};

export default useResize;
