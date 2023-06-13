import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type CardProps = {
  className?: string;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(className, 'relative overflow-hidden bg-white shadow')}
    >
      {children}
    </div>
  );
};
