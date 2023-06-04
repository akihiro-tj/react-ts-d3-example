import { axisBottom } from 'd3-axis';
import { ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

type AxisBottom = {
  className?: string;
  y: number;
  scale: ScaleLinear<number, number, never>;
};

const AxisBottom: FC<AxisBottom> = ({ className, y, scale }) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisBottom(scale)(element);
  }, [scale]);

  return (
    <g ref={ref} className={className} transform={`translate(0, ${y})`}></g>
  );
};

export default AxisBottom;
