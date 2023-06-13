import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type SVGChartProps = {
  className?: string;
  children?: ReactNode;
  width: number;
  height: number;
};

export const SVGChart: FC<SVGChartProps> = ({
  className,
  children,
  width,
  height,
}) => {
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
