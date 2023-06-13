import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type BackGroundProps = {
  className?: string;
  children?: ReactNode;
};

export const BackGround: FC<BackGroundProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, 'min-h-screen overflow-hidden bg-gray-50')}>
      {children}
    </div>
  );
};
