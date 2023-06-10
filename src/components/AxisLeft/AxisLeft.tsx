import clsx from 'clsx';
import { axisLeft } from 'd3-axis';
import { NumberValue, ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

import style from './AxisLeft.module.scss';

type AxisLeft = {
  className?: string;
  x: number;
  scale: ScaleLinear<number, number, never>;
  tickFormat?: (domainValue: NumberValue, index: number) => string;
  label?: string;
  labelY?: number;
};

const AxisLeft: FC<AxisLeft> = ({
  className,
  x,
  scale,
  tickFormat = (value: NumberValue) => value.toString(),
  label,
  labelY = 0,
}) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisLeft(scale).tickFormat(tickFormat)(element);
  }, [scale, tickFormat]);

  return (
    <g
      ref={ref}
      className={clsx(className, style.axisLeft)}
      transform={`translate(${x}, 0)`}
    >
      {label && (
        <text
          className="font-semibold"
          x={0}
          y={labelY}
          fill="#000"
          fontSize={14}
          textAnchor="start"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export default AxisLeft;
