import { useCallback, useState } from 'react';

import useResize from './useResize';

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useResize(updateSize);

  return size;
};

export default useWindowSize;
