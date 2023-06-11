import clsx from 'clsx';
import { FC, MouseEventHandler } from 'react';

type Plot = {
  className?: string;
  id?: string;
  x: number;
  y: number;
  radius: number;
  color?: string;
  strokeOpacity?: number;
  fillOpacity?: number;
  disabled?: boolean;
  onMouseEnter?: MouseEventHandler<SVGCircleElement>;
  onMouseMove?: MouseEventHandler<SVGCircleElement>;
  onMouseLeave?: MouseEventHandler<SVGCircleElement>;
};

const Plot: FC<Plot> = ({
  className,
  id,
  x,
  y,
  radius,
  color = '#888',
  strokeOpacity = 1,
  fillOpacity = 0.7,
  disabled,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}) => {
  return (
    <g>
      <circle
        className={clsx(className, {
          'pointer-events-none': disabled,
        })}
        data-id={id}
        cx={x}
        cy={y}
        r={radius}
        fill={color}
        fillOpacity={fillOpacity}
        stroke={color}
        strokeOpacity={strokeOpacity}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      />
    </g>
  );
};

export default Plot;
