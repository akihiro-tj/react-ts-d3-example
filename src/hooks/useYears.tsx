import { useContext, useMemo } from 'react';

import { AppContext } from '../providers/App/AppContextProvider';

const minYear = 1543;
const maxYear = 2018;

const useYears = () => {
  const { data } = useContext(AppContext);

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year)))
      .filter(year => minYear <= year && year <= maxYear)
      .sort((a, b) => a - b);
  }, [data]);

  return years;
};

export default useYears;
