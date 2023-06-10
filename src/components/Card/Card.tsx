import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type Card = {
  className?: string;
  children?: ReactNode;
};

const Card: FC<Card> = ({ className, children }) => {
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

export default Card;
