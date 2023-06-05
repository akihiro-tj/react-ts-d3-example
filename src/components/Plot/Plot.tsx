import { FC } from 'react';

type Plot = {
  className?: string;
  label: string;
  x: number;
  y: number;
  radius: number;
};

const Plot: FC<Plot> = ({ className, label, x, y, radius }) => {
  return (
    <circle className={className} data-label={label} cx={x} cy={y} r={radius} />
  );
};

export default Plot;
