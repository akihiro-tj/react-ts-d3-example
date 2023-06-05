import { useContext, useMemo } from 'react';

import { AppContext } from '../providers/App/AppContextProvider';

const useYears = () => {
  const { data } = useContext(AppContext);

  const years = useMemo(() => {
    return Array.from(new Set(data.map(d => d.year))).sort((a, b) => a - b);
  }, [data]);

  return years;
};

export default useYears;
