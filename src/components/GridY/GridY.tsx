import clsx from 'clsx';
import { axisBottom } from 'd3-axis';
import { ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

import style from './GridY.module.scss';

type GridY = {
  className?: string;
  minY: number;
  maxY: number;
  scale: ScaleLinear<number, number, never>;
};

const GridY: FC<GridY> = ({ className, minY, maxY, scale }) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisBottom(scale)(element);

    element
      .selectAll('.tick line')
      .attr('transform', `translate(0, ${-minY})`)
      .attr('y1', minY)
      .attr('y2', maxY);
  }, [scale, minY, maxY]);

  return (
    <g
      ref={ref}
      className={clsx(className, style.gridY)}
      transform={`translate(0, ${minY})`}
    />
  );
};

export default GridY;
