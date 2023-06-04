import { FC } from 'react';

import './styles/index.scss';
import AxisLeft from './components/AxisLeft/AxisLeft';
import Container from './components/Container/Container';
import SVGChart from './components/SVGChart/SVGChart';
import useChartSize from './hooks/useChartSize';
import useData from './hooks/useData';

const chartMargin = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 50,
};

const App: FC = () => {
  const { chartParentRef, chartSize } = useChartSize();
  const { scale } = useData(chartSize, chartMargin);

  return (
    <div>
      <Container ref={chartParentRef}>
        <SVGChart {...chartSize}>
          {scale && <AxisLeft margin={chartMargin} scale={scale.y} />}
        </SVGChart>
      </Container>
    </div>
  );
};

export default App;
