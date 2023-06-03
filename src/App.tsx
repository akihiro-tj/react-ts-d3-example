import { FC } from 'react';

import './styles/index.scss';
import Container from './components/Container/Container';
import SVGChart from './components/SVGChart/SVGChart';
import useChartSize from './hooks/useChartSize';
import useData from './hooks/useData';

const App: FC = () => {
  const { chartParentRef, chartSize } = useChartSize();

  useData();

  return (
    <div>
      <Container ref={chartParentRef}>
        <SVGChart {...chartSize}></SVGChart>
      </Container>
    </div>
  );
};

export default App;
