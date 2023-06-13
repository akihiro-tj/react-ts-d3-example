import { MouseEventHandler, useCallback } from 'react';

const useErrorFallback = () => {
  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    location.href = '/';
  }, []);

  return { onClick };
};

export default useErrorFallback;
