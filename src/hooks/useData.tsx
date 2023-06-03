import { useEffect, useState } from 'react';

import { Datum } from '../types';

import useCSV from './useCSV';

const useData = () => {
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
};

export default useData;
