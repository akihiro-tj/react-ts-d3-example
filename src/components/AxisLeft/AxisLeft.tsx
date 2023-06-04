import { axisLeft } from 'd3-axis';
import { ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type AxisLeft = {
  className?: string;
  margin: Margin;
  scale: ScaleLinear<number, number, never>;
};

const AxisLeft: FC<AxisLeft> = ({ className, margin, scale }) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisLeft(scale)(element);
  }, [scale]);

  return (
    <g
      ref={ref}
      className={className}
      transform={`translate(${margin.left}, 0)`}
    ></g>
  );
};

export default AxisLeft;
