import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type RailProps = {
  className?: string;
  children?: ReactNode;
};

export const Rail: FC<RailProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, 'mx-auto max-w-screen-sm')}>{children}</div>
  );
};
