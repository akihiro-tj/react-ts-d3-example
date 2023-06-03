import { useEffect, useRef, useState } from 'react';

const useChartSize = (aspect = 3 / 4) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;
    const height = width * aspect;

    setSize({ width, height });
  }, [aspect]);

  return {
    chartParentRef: ref,
    chartSize: size,
  };
};

export default useChartSize;
