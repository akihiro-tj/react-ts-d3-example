import { extent, max } from 'd3-array';
import { format } from 'd3-format';
import { NumberValue, scaleLinear, scaleLog } from 'd3-scale';
import {
  MouseEventHandler,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import { colors } from '../constant';
import { AppContext } from '../providers/app/AppContextProvider';
import { calcArea, calcRadius } from '../util';

import useResize from './useResize';
import useWindowSize from './useWindowSize';

const breakPoint = 600;

const margins = {
  mobile: {
    top: 40,
    right: 60,
    bottom: 65,
    left: 50,
  },
  laptop: {
    top: 50,
    right: 45,
    bottom: 70,
    left: 60,
  },
};

const aspects = {
  mobile: 5 / 4,
  laptop: 3 / 5,
};

const radiusRanges = {
  mobile: {
    min: 1,
    max: 12,
  },
  laptop: {
    min: 2,
    max: 20,
  },
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
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [hoveredCountry, setHoveredCountry] = useState<string>();
  const { data, year, checkBoxGroup } = useContext(AppContext);

  const windowSize = useWindowSize();

  const device = useMemo(() => {
    return windowSize.width < breakPoint ? 'mobile' : 'laptop';
  }, [windowSize]);

  const margin = useMemo(() => {
    return margins[device];
  }, [device]);

  const aspect = useMemo(() => {
    return aspects[device];
  }, [device]);

  const radiusRange = useMemo(() => {
    return radiusRanges[device];
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
      .range([calcArea(radiusRange.min), calcArea(radiusRange.max)]);

    const radius = (value: number) => calcRadius(area(value));

    return { x, y, radius };
  }, [data, size, margin, radiusRange]);

  const plots = useMemo(() => {
    return data
      .filter(d => d.year === year)
      .map(d => {
        const focused =
          checkBoxGroup[d.continent] &&
          (!hoveredCountry || d.country === hoveredCountry);

        return {
          id: d.country,
          x: scale.x(d.gdp),
          y: scale.y(d.life),
          radius: scale.radius(d.population),
          color: colors[d.continent],
          strokeOpacity: focused ? 1 : 0.2,
          fillOpacity: focused ? 0.7 : 0.1,
          disabled: !checkBoxGroup[d.continent],
        };
      });
  }, [data, year, scale, checkBoxGroup, hoveredCountry]);

  const labels = useMemo(() => {
    return data
      .filter(
        d =>
          d.year === year &&
          (d.showLabel ||
            (checkBoxGroup[d.continent] && d.country === hoveredCountry)),
      )
      .map(d => {
        const focused =
          checkBoxGroup[d.continent] &&
          (!hoveredCountry || d.country === hoveredCountry);

        return {
          id: d.country,
          x: scale.x(d.gdp),
          y: scale.y(d.life) - scale.radius(d.population),
          text: d.country,
          color: colors[d.continent],
          opacity: focused ? 1 : 0.2,
        };
      });
  }, [data, year, scale, checkBoxGroup, hoveredCountry]);

  const yearLabel = useMemo(() => {
    return {
      x: margin.left + yearLabelSize * 0.5,
      y: margin.top + yearLabelSize + yearLabelSize * 0.3125,
      text: year.toString(),
      color: '#000',
      size: yearLabelSize,
    };
  }, [year, margin, yearLabelSize]);

  const onMouseEnter: MouseEventHandler<SVGCircleElement> = useCallback(e => {
    setHoveredCountry(e.currentTarget.getAttribute('data-id') || undefined);
  }, []);

  const onMouseMove: MouseEventHandler<SVGCircleElement> = useCallback(e => {
    setHoveredCountry(e.currentTarget.getAttribute('data-id') || undefined);
  }, []);

  const onMouseLeave: MouseEventHandler<SVGCircleElement> = useCallback(() => {
    setHoveredCountry(undefined);
  }, []);

  const legendItems = useMemo(() => {
    return [
      {
        label: '10億',
        radius: scale.radius(1000000000),
      },
      {
        label: '5億',
        radius: scale.radius(500000000),
      },
      {
        label: '1億',
        radius: scale.radius(100000000),
      },
      {
        label: '1000万',
        radius: scale.radius(10000000),
      },
    ];
  }, [scale]);

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
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    legendItems,
  };
};

export default useChart;
