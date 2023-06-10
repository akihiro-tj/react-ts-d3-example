import clsx from 'clsx';
import { axisBottom } from 'd3-axis';
import { NumberValue, ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

import style from './AxisBottom.module.scss';

type AxisBottom = {
  className?: string;
  y: number;
  scale: ScaleLinear<number, number, never>;
  tickFormat?: (domainValue: NumberValue, index: number) => string;
  label?: string;
  labelX?: number;
};

const AxisBottom: FC<AxisBottom> = ({
  className,
  y,
  scale,
  tickFormat = (value: NumberValue) => value.toString(),
  label,
  labelX = 0,
}) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisBottom(scale).tickFormat(tickFormat)(element);
  }, [scale, tickFormat]);

  return (
    <g
      ref={ref}
      className={clsx(className, style.axisBottom)}
      transform={`translate(0, ${y})`}
    >
      {label && (
        <text
          x={labelX}
          y={0}
          dy="3em"
          fill="#000"
          fontSize={14}
          textAnchor="end"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export default AxisBottom;
