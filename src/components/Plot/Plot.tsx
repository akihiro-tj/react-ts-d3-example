import { FC } from 'react';

type Plot = {
  className?: string;
  label: string;
  x: number;
  y: number;
};

const Plot: FC<Plot> = ({ className, label, x, y }) => {
  return <circle className={className} cx={x} cy={y} r={10} />;
};

export default Plot;
