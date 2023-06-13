import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const useYear = () => {
  const params = useParams();

  const year = useMemo(() => {
    const year = parseFloat(params.year || '');

    if (isNaN(year)) {
      throw new Error();
    }

    return year;
  }, [params]);

  return year;
};

export default useYear;
