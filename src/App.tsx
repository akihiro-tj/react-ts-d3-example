import { FC } from 'react';

import './styles/index.scss';
import AxisBottom from './components/AxisBottom/AxisBottom';
import AxisLeft from './components/AxisLeft/AxisLeft';
import Container from './components/Container/Container';
import GridX from './components/GridX/GridX';
import GridY from './components/GridY/GridY';
import Plot from './components/Plot/Plot';
import SVGChart from './components/SVGChart/SVGChart';
import useChartSize from './hooks/useChartSize';
import useData from './hooks/useData';

const chartMargin = {
  top: 20,
  right: 60,
  bottom: 50,
  left: 50,
};

const App: FC = () => {
  const { chartParentRef, chartSize } = useChartSize();
  const { years, scale, plots } = useData(chartSize, chartMargin);

  return (
    <div>
      <Container ref={chartParentRef}>
        <SVGChart {...chartSize}>
          <GridX
            minX={chartMargin.left}
            maxX={chartSize.width - chartMargin.right}
            scale={scale.y}
          />
          <GridY
            minY={chartMargin.top}
            maxY={chartSize.height - chartMargin.bottom}
            scale={scale.x}
          />
          <AxisLeft x={chartMargin.left} scale={scale.y} />
          <AxisBottom
            y={chartSize.height - chartMargin.bottom}
            scale={scale.x}
          />
          {plots.map(plot => (
            <Plot key={plot.label} {...plot} />
          ))}
        </SVGChart>
      </Container>
    </div>
  );
};

export default App;
