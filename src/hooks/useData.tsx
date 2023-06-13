import { useContext, useEffect } from 'react';

import { countries, maxYear, minYear } from '../config';
import { AppUpdateContext } from '../providers/app/AppContextProvider';
import { updateData } from '../providers/app/appReducer';
import { Datum } from '../types';

import useCSV from './useCSV';

const useData = () => {
  const dispatch = useContext(AppUpdateContext);

  const csv = useCSV('data.csv');

  useEffect(() => {
    if (!csv) return;

    const data: Datum[] = csv
      .filter(row => Object.keys(countries).includes(row.Entity))
      .map(row => ({
        country: row.Entity,
        continent: countries[row.Entity].continent,
        showLabel: countries[row.Entity].showLabel,
        year: parseFloat(row.Year),
        life: parseFloat(row['Life expectancy at birth (historical)']),
        gdp: parseFloat(row['GDP per capita']),
        population: parseFloat(row['Population (historical estimates)']),
      }))
      .filter(
        d =>
          minYear <= d.year &&
          d.year <= maxYear &&
          !isNaN(d.life) &&
          !isNaN(d.gdp) &&
          !isNaN(d.population),
      );

    dispatch(updateData(data));
  }, [csv, dispatch]);
};

export default useData;
