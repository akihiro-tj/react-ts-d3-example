import { FC } from 'react';

type Plot = {
  className?: string;
  x: number;
  y: number;
  radius: number;
  color?: string;
  strokeOpacity?: number;
  fillOpacity?: number;
};

const Plot: FC<Plot> = ({
  className,
  x,
  y,
  radius,
  color = '#888',
  strokeOpacity = 1,
  fillOpacity = 0.7,
}) => {
  return (
    <g>
      <circle
        className={className}
        cx={x}
        cy={y}
        r={radius}
        fill={color}
        fillOpacity={fillOpacity}
        stroke={color}
        strokeOpacity={strokeOpacity}
      />
    </g>
  );
};

export default Plot;
