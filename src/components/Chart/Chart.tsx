import clsx from 'clsx';
import { format } from 'd3-format';
import { NumberValue } from 'd3-scale';
import { FC } from 'react';

import useChart from '../../hooks/useChart';
import AxisBottom from '../AxisBottom/AxisBottom';
import AxisLeft from '../AxisLeft/AxisLeft';
import Container from '../Container/Container';
import GridX from '../GridX/GridX';
import GridY from '../GridY/GridY';
import Label from '../Label/Label';
import Plot from '../Plot/Plot';
import SVGChart from '../SVGChart/SVGChart';

type Chart = {
  className?: string;
};

const margin = {
  top: 30,
  right: 60,
  bottom: 50,
  left: 50,
};

const aspect = 3 / 4;

const xTicks = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
const xTickFormat = (value: NumberValue) => {
  return xTicks.includes(value.valueOf()) ? format('$,.0f')(value) : '';
};

const yTickFormat: any = (value: NumberValue, index: number, ticks: any[]) => {
  const age = value.valueOf();
  return index === ticks.length - 1 ? `${age}歳` : age;
};

const Chart: FC<Chart> = ({ className }) => {
  const { ref, size, scale, plots, labels, yearLabel } = useChart(
    margin,
    aspect,
  );

  return (
    <div className={clsx(className, 'mt-10 overflow-hidden py-1')}>
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
    </div>
  );
};

export default Chart;
