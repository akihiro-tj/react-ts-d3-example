import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { AppContext } from '../providers/App/AppContextProvider';

type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const useChart = (margin: Margin, aspect: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const { data, year } = useContext(AppContext);

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;
    const height = width * aspect;

    setSize({ width, height });
  }, [aspect]);

  const scale = useMemo(() => {
    const x = scaleLinear()
      .domain(extent(data, d => d.gdp) as [number, number])
      .range([margin.left, size.width - margin.right])
      .nice();

    const y = scaleLinear()
      .domain(extent(data, d => d.life) as [number, number])
      .range([size.height - margin.bottom, margin.top])
      .nice();

    return { x, y };
  }, [data, size, margin]);

  const plots = useMemo(() => {
    return data
      .filter(d => d.year === year && !isNaN(d.gdp) && !isNaN(d.life))
      .map(d => ({
        label: d.country,
        x: scale.x(d.gdp),
        y: scale.y(d.life),
      }));
  }, [data, year, scale]);

  return { ref, size, scale, plots };
};

export default useChart;
