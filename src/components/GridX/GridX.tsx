import clsx from 'clsx';
import { axisLeft } from 'd3-axis';
import { ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { FC, useEffect, useRef } from 'react';

import style from './GridX.module.scss';

type GridX = {
  className?: string;
  minX: number;
  maxX: number;
  scale: ScaleLinear<number, number, never>;
};

const GridX: FC<GridX> = ({ className, minX, maxX, scale }) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = select(ref.current);

    axisLeft(scale)(element);

    element
      .selectAll('.tick line')
      .attr('transform', `translate(${-minX}, 0)`)
      .attr('x1', minX)
      .attr('x2', maxX);
  }, [scale, minX, maxX]);

  return (
    <g
      ref={ref}
      className={clsx(className, style.gridX)}
      transform={`translate(${minX}, 0)`}
    />
  );
};

export default GridX;
