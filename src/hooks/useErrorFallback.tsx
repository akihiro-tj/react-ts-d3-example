import { MouseEventHandler, useCallback } from 'react';

const useErrorFallback = () => {
  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    location.href = '/react-ts-d3-example/';
  }, []);

  return { onClick };
};

export default useErrorFallback;
