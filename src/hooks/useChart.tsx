import { extent, max } from 'd3-array';
import { scaleLinear, scaleLog } from 'd3-scale';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { AppContext } from '../providers/App/AppContextProvider';
import { calcArea, calcRadius } from '../util';

type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const maxRadius = 20;

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
    const x = scaleLog()
      .domain(extent(data, d => d.gdp) as [number, number])
      .range([margin.left, size.width - margin.right]);

    const y = scaleLinear()
      .domain(extent(data, d => d.life) as [number, number])
      .range([size.height - margin.bottom, margin.top])
      .nice();

    const area = scaleLinear()
      .domain([0, max(data, d => d.population) as number])
      .range([0, calcArea(maxRadius)]);

    const radius = (value: number) => calcRadius(area(value));

    return { x, y, radius };
  }, [data, size, margin]);

  const plots = useMemo(() => {
    return data
      .filter(d => d.year === year)
      .map(d => ({
        label: d.country,
        x: scale.x(d.gdp),
        y: scale.y(d.life),
        radius: scale.radius(d.population),
      }));
  }, [data, year, scale]);

  return { ref, size, scale, plots };
};

export default useChart;
