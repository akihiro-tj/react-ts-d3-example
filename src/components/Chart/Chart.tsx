import clsx from 'clsx';
import { FC } from 'react';

import useChart from '../../hooks/useChart';
import AxisBottom from '../AxisBottom/AxisBottom';
import AxisLeft from '../AxisLeft/AxisLeft';
import Card from '../Card/Card';
import Container from '../Container/Container';
import GridX from '../GridX/GridX';
import GridY from '../GridY/GridY';
import Label from '../Label/Label';
import Legend from '../Legend/Legend';
import Plot from '../Plot/Plot';
import SVGChart from '../SVGChart/SVGChart';

type Chart = {
  className?: string;
};

const Chart: FC<Chart> = ({ className }) => {
  const {
    ref,
    margin,
    xTickFormat,
    yTickFormat,
    size,
    scale,
    plots,
    labels,
    yearLabel,
  } = useChart();

  return (
    <div className={clsx(className, 'mt-10 overflow-hidden py-1')}>
      <Card>
        <Legend />
        <Container ref={ref}>
          <SVGChart {...size}>
            <GridX
              minX={margin.left}
              maxX={size.width - margin.right}
              scale={scale.y}
            />
            <GridY
              minY={margin.top}
              maxY={size.height - margin.bottom}
              scale={scale.x}
            />
            <AxisLeft
              x={margin.left}
              scale={scale.y}
              tickFormat={yTickFormat}
              label="平均寿命"
              labelY={margin.top - 12}
            />
            <AxisBottom
              y={size.height - margin.bottom}
              scale={scale.x}
              tickFormat={xTickFormat}
              label="1人あたりGDP(対数スケール)"
              labelX={size.width - margin.right}
            />
            {plots.map(plot => (
              <Plot key={plot.id} {...plot} />
            ))}
            {labels.map(label => (
              <Label key={label.id} {...label} />
            ))}
            <Label {...yearLabel} />
          </SVGChart>
        </Container>
      </Card>
    </div>
  );
};

export default Chart;
