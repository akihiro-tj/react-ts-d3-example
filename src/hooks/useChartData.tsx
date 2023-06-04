import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useContext, useMemo } from 'react';

import { AppContext } from '../providers/App/AppContextProvider';

type Size = {
  width: number;
  height: number;
};

type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const minYear = 1543;
const maxYear = 2018;

const useChartData = (size: Size, margin: Margin) => {
  const { data, year } = useContext(AppContext);

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

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year)))
      .filter(year => minYear <= year && year <= maxYear)
      .sort((a, b) => a - b);
  }, [data]);

  const plots = useMemo(() => {
    return data
      .filter(d => d.year === year && !isNaN(d.gdp) && !isNaN(d.life))
      .map(d => ({
        label: d.country,
        x: scale.x(d.gdp),
        y: scale.y(d.life),
      }));
  }, [data, year, scale]);

  return { years, scale, plots };
};

export default useChartData;
