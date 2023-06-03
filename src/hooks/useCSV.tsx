import { csv } from 'd3-fetch';
import { useEffect, useState } from 'react';

const useCSV = (url: string) => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const data = await csv(url);
      setData(data);
    })();
  }, [url]);

  return data;
};

export default useCSV;
