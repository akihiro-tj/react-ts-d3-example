import { FC } from 'react';

type Plot = {
  className?: string;
  label: string;
  x: number;
  y: number;
  radius: number;
  color?: string;
  fillOpacity?: number;
};

const Plot: FC<Plot> = ({
  className,
  label,
  x,
  y,
  radius,
  color = '#888',
  fillOpacity = 0.7,
}) => {
  return (
    <circle
      className={className}
      data-label={label}
      cx={x}
      cy={y}
      r={radius}
      fill={color}
      fillOpacity={fillOpacity}
      stroke={color}
    />
  );
};

export default Plot;
