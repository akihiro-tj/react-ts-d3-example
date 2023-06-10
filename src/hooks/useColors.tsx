import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { useContext, useMemo } from 'react';

import { continents } from '../constant';
import { AppContext } from '../providers/app/AppContextProvider';

const useColors = () => {
  const { data } = useContext(AppContext);

  const colors = useMemo(() => {
    const colorScale = scaleOrdinal(schemeCategory10);

    return continents.reduce(
      (acc, cur, index) => ({
        ...acc,
        [cur]: colorScale(index.toString()),
      }),
      {} as { [key: string]: string },
    );
  }, []);

  return colors;
};

export default useColors;
