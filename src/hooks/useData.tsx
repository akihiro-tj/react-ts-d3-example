import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useEffect, useMemo, useState } from 'react';

import { Datum } from '../types';

import useCSV from './useCSV';

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

const useData = (size: Size, margin: Margin) => {
  const [data, setData] = useState<Datum[]>();

  const csv = useCSV('/data.csv');

  useEffect(() => {
    if (!csv) return;

    const data: Datum[] = csv.map(row => ({
      country: row.Entity,
      year: parseFloat(row.Year),
      life: parseFloat(row['Life expectancy at birth (historical)']),
      gdp: parseFloat(row['GDP per capita']),
      population: parseFloat(row['Population (historical estimates)']),
    }));

    setData(data);
  }, [csv]);

  const scale = useMemo(() => {
    if (!data) return;

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

  return { scale };
};

export default useData;
