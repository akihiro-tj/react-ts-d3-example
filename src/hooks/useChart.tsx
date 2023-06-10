import { extent, max } from 'd3-array';
import { format } from 'd3-format';
import { NumberValue, scaleLinear, scaleLog, scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { useCallback, useContext, useMemo, useRef, useState } from 'react';

import { AppContext } from '../providers/app/AppContextProvider';
import { calcArea, calcRadius } from '../util';

import useResize from './useResize';
import useWindowSize from './useWindowSize';

const minRadius = 2;
const maxRadius = 20;

const breakPoint = 600;

const margins = {
  mobile: {
    top: 40,
    right: 60,
    bottom: 60,
    left: 50,
  },
  laptop: {
    top: 50,
    right: 35,
    bottom: 65,
    left: 60,
  },
};

const aspects = {
  mobile: 5 / 4,
  laptop: 3 / 4,
};

const xTickArrays = {
  mobile: [1000, 5000, 20000, 100000],
  laptop: [1000, 2000, 5000, 10000, 20000, 50000, 100000],
};

const yearLabelSizes = {
  mobile: 24,
  laptop: 32,
};

const useChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const { data, year } = useContext(AppContext);

  const device = useMemo(() => {
    return windowSize.width < breakPoint ? 'mobile' : 'laptop';
  }, [windowSize]);

  const margin = useMemo(() => {
    return margins[device];
  }, [device]);

  const aspect = useMemo(() => {
    return aspects[device];
  }, [device]);

  const xTickArray = useMemo(() => {
    return xTickArrays[device];
  }, [device]);

  const yearLabelSize = useMemo(() => {
    return yearLabelSizes[device];
  }, [device]);

  const xTickFormat = useCallback(
    (value: NumberValue) => {
      return xTickArray.includes(value.valueOf()) ? format('$,.0f')(value) : '';
    },
    [xTickArray],
  );

  const yTickFormat: any = useCallback(
    (value: NumberValue, index: number, ticks: any[]) => {
      const age = value.valueOf();
      return index === ticks.length - 1 ? `${age}歳` : age;
    },
    [],
  );

  const updateSize = useCallback(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;
    const height = width * aspect;

    setSize({ width, height });
  }, [aspect]);

  useResize(updateSize);

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
      .range([calcArea(minRadius), calcArea(maxRadius)]);

    const radius = (value: number) => calcRadius(area(value));

    return { x, y, radius };
  }, [data, size, margin]);

  const colors = useMemo(() => {
    const colorScale = scaleOrdinal(schemeCategory10);
    const continents = Array.from(new Set(data.map(d => d.continent)));

    return continents.reduce(
      (acc, cur, index) => ({
        ...acc,
        [cur]: colorScale(index.toString()),
      }),
      {} as { [key: string]: string },
    );
  }, [data]);

  const plots = useMemo(() => {
    return data
      .filter(d => d.year === year)
      .map(d => ({
        id: d.country,
        x: scale.x(d.gdp),
        y: scale.y(d.life),
        radius: scale.radius(d.population),
        color: colors[d.continent],
      }));
  }, [data, year, scale, colors]);

  const labels = useMemo(() => {
    return data
      .filter(d => d.year === year && d.showLabel)
      .map(d => ({
        id: d.country,
        x: scale.x(d.gdp),
        y: scale.y(d.life) - scale.radius(d.population),
        text: d.country,
        color: colors[d.continent],
      }));
  }, [data, year, scale, colors]);

  const yearLabel = useMemo(() => {
    return {
      x: margin.left + yearLabelSize * 0.5,
      y: margin.top + yearLabelSize + yearLabelSize * 0.3125,
      text: year.toString(),
      color: '#000',
      size: yearLabelSize,
    };
  }, [year, margin, yearLabelSize]);

  return {
    ref,
    margin,
    xTickFormat,
    yTickFormat,
    size,
    scale,
    plots,
    labels,
    yearLabel,
  };
};

export default useChart;
