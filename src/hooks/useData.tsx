import { useContext, useEffect } from 'react';

import { AppUpdateContext } from '../providers/App/AppContextProvider';
import { updateData } from '../providers/App/appReducer';
import { Datum } from '../types';

import useCSV from './useCSV';

const useData = () => {
  const dispatch = useContext(AppUpdateContext);

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

    dispatch(updateData(data));
  }, [csv, dispatch]);
};

export default useData;
