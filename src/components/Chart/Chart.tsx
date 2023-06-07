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
  top: 20,
  right: 60,
  bottom: 50,
  left: 50,
};

const aspect = 3 / 4;

const Chart: FC<Chart> = ({ className }) => {
  const { ref, size, scale, plots, labels, yearLabel } = useChart(
    margin,
    aspect,
  );

  return (
    <div className={className}>
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
          <AxisLeft x={margin.left} scale={scale.y} />
          <AxisBottom y={size.height - margin.bottom} scale={scale.x} />
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
