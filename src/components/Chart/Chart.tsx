import { FC } from 'react';

import useChart from '../../hooks/useChart';
import { Container } from '../Container';
import { Legend } from '../Legend';
import {
  AxisBottom,
  AxisLeft,
  GridX,
  GridY,
  Label,
  Plot,
  SVG,
} from '../SVGChart';

type ChartProps = {
  className?: string;
};

export const Chart: FC<ChartProps> = ({ className }) => {
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
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    legendItems,
  } = useChart();

  return (
    <div className={className}>
      <Legend
        className="px-3 pb-3 pt-4 sm:px-5 sm:pt-6"
        heading="人口"
        items={legendItems}
      />
      <Container ref={ref}>
        <SVG {...size}>
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
            label="1人あたりGDP (対数スケール)"
            labelX={size.width - margin.right}
          />
          {plots.map(plot => (
            <Plot
              key={plot.id}
              {...plot}
              onMouseEnter={onMouseEnter}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            />
          ))}
          {labels.map(label => (
            <Label key={label.id} {...label} />
          ))}
          <Label {...yearLabel} />
        </SVG>
      </Container>
    </div>
  );
};
