import { FC } from 'react';

import useChartData from '../../hooks/useChartData';
import useChartSize from '../../hooks/useChartSize';
import AxisBottom from '../AxisBottom/AxisBottom';
import AxisLeft from '../AxisLeft/AxisLeft';
import Container from '../Container/Container';
import GridX from '../GridX/GridX';
import GridY from '../GridY/GridY';
import Plot from '../Plot/Plot';
import SVGChart from '../SVGChart/SVGChart';

type Chart = {
  className?: string;
};

const chartMargin = {
  top: 20,
  right: 60,
  bottom: 50,
  left: 50,
};

const Chart: FC<Chart> = ({ className }) => {
  const { chartParentRef, chartSize } = useChartSize();
  const { scale, plots } = useChartData(chartSize, chartMargin);

  return (
    <div className={className}>
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

export default Chart;
