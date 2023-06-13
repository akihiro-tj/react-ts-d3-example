import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type CardProps = {
  className?: string;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        'relative mx-3 max-w-screen-md bg-white shadow md:mx-auto',
      )}
    >
      {children}
    </div>
  );
};
