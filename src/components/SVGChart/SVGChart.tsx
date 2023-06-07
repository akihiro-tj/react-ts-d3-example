import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type SVGChart = {
  className?: string;
  children?: ReactNode;
  width: number;
  height: number;
};

const SVGChart: FC<SVGChart> = ({ className, children, width, height }) => {
  return (
    <div className={clsx(className, 'relative h-full w-full')}>
      <svg
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {children}
      </svg>
    </div>
  );
};

export default SVGChart;
